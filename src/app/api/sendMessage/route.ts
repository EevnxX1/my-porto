// app/api/sendMessage/route.ts
export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch('https://script.google.com/macros/s/AKfycbwLTp3781flkCKyrvseGoZxCyEMrAbo_TbHtCDhefZdB8QW2zXt1adjVVoCz5hmdTP8-A/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}
