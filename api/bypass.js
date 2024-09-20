export default async function handler(req, res) {
  const { url, title } = req.query;
  
  // Early return if a specific title is detected
  if (title === 'Just a moment...') {
    return res.status(200).json({ message: "Waiting for update." });
  }
  
  // Check if the URL matches and replace portions as necessary
  let newerURL = url.replace(
    'https://spdmteam.com/key-system-1?hwid=',
    'https://spdmteam.com/api/keysystem?hwid='
  ).replace('&zone=Europe/Rome', '&zone=Europe/Rome&advertiser=lootlabs&OS=ios');

  // Logic based on page title or URL match
  if (url.includes("https://spdmteam.com/key-system-1?hwid=")) {
    return res.status(302).redirect(newerURL);
  } else if (title.includes("NEO") && title.includes("1")) {
    return res.status(302).redirect("https://spdmteam.com/api/keysystem?step=1&advertiser=linkvertise&OS=ios");
  } else if (url.includes("https://spdmteam.com/key-system-2?hwid=")) {
    return res.status(302).redirect("https://loot-link.com/s?mYit");
  } else if (title.includes("NEO") && title.includes("2")) {
    return res.status(302).redirect("https://spdmteam.com/api/keysystem?step=2&advertiser=linkvertise&OS=ios");
  } else if (url.includes("https://spdmteam.com/key-system-3?hwid=")) {
    return res.status(302).redirect("https://loot-link.com/s?qlbU");
  } else if (title.includes("NEO") && title.includes("3")) {
    return res.status(302).redirect("https://spdmteam.com/api/keysystem?step=3&advertiser=linkvertise&OS=ios");
  }

  // If no match, just return a generic message
  return res.status(200).json({ message: "Script completed, no action taken." });
}
