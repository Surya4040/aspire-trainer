import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Log submission on the server terminal / logs
        console.log("==========================================");
        console.log("NEW LEAD / INQUIRY RECEIVED at", new Date().toISOString());
        console.log(JSON.stringify(body, null, 2));
        console.log("==========================================");

        // Attempt forwarding to external email service if reachable, with timeout
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 4000);

            await fetch("https://formsubmit.co/ajax/aspireinfo.edu@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(body),
                signal: controller.signal
            }).catch(() => null);

            clearTimeout(timeoutId);
        } catch {
            // Ignore external email service downtime
        }

        return NextResponse.json({ success: true, message: "Inquiry recorded successfully" });
    } catch (err: any) {
        console.error("API error:", err);
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
