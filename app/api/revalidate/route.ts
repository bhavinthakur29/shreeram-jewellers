import { revalidateTag, revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const expectedSecret = process.env.REVALIDATE_SECRET || "tekbiz-secure-secret";
    if (body.secret !== expectedSecret) {
      return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
    }

    if (body.tag) {
      // { expire: 0 } forces immediate edge expiration in Next.js 16
      revalidateTag(String(body.tag), { expire: 0 });
    } else {
      revalidatePath("/");
      revalidatePath("/products");
    }

    return NextResponse.json({
      revalidated: true,
      timestamp: Date.now(),
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Revalidation failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}