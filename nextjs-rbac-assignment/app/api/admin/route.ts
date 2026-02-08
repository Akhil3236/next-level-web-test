import { NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";
import { hasRole } from "@/lib/role";

export async function GET(req: Request) {
    const user = getUserFromRequest(req);

    if (!user) {
        return NextResponse.json(
            { message: "Unauthorized" },
            { status: 401 }
        );
    }

    if (!hasRole(user.role, "admin")) {
        return NextResponse.json(
            { message: "Forbidden ! you are not admin" },
            { status: 403 }
        );
    }

    return NextResponse.json({
        message: "Welcome admin",
        user
    });
}





// export async function POST(req: Request) {
//     const user = getUserFromRequest(req);

//     if (!user) {
//         return NextResponse.json(
//             { message: "Unauthorized" },
//             { status: 401 }
//         );
//     }

//     console.log(user.role);

//     if (!hasRole(user.role, "admin")) {
//         return NextResponse.json(
//             { message: "Forbidden " },
//             { status: 403 }
//         );
//     }

//     try {
//         const body = await req.json();
//         return NextResponse.json({
//             message: "Admin POST action successful",
//             data: body,
//             user
//         });
//     } catch (error) {
//         return NextResponse.json({
//             message: "Admin POST action successful (no body)",
//             user
//         });
//     }
// }
