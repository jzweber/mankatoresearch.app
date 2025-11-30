import {NextResponse} from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const {query, conversation_history} = body;

    //A response from a chatbot
    const response = await fetch ('http://localhost:5000/api/query', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query, conversation_history}),
    });
    const data = await response.json();
    if (response.ok) {
        return NextResponse.json({reply: data.response});
    } 
    else {
        return NextResponse.json({error: 'Error fetching chat response'}, {status: 500});
    }
}