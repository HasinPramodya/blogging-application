import { NextRequest, NextResponse } from "next/server";
import { supabaseRouteHandler } from "../../../../utils/supabase";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
    const reqUrl = new URL(req.url);
    const code = reqUrl.searchParams.get('code');
    
    if(code){
        const supabase = supabaseRouteHandler(cookies)
        await supabase.auth.exchangeCodeForSession(code);
    
}
  return NextResponse.redirect(reqUrl.origin);

}