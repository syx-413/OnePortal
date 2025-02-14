/**
 * This file contains the configuration for the API endpoints and tokens we use.
 *
 * - If you are a OneDrive International user, you would not have to change anything here.
 * - If you are not the admin of your OneDrive for Business account, you may need to define your own clientId/clientSecret,
 *   check documentation for more details.
 * - If you are using a E5 Subscription OneDrive for Business account, the direct links of your files are not the same here.
 *   In which case you would need to change directLinkRegex.
 */
module.exports = {
  // The clientId and clientSecret are used to authenticate the user with Microsoft Graph API using OAuth. You would
  // not need to change anything here if you can authenticate with your personal Microsoft account with OneDrive International.
  aesKey: process.env.AES_SECRET_KEY || 'OnePortal',
  //clientId: '657c87ed-1c77-47b3-896c-373efbca0c9a',
  //obfuscatedClientSecret: 'U2FsdGVkX19negoCvXWkrHAGrjgzHvWsNH45CriB58zlzE75kJEhg4E6a7TL/fl/bwUeSQZCJn2Q9+j++A0PuQ==',
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID || '3e96de12-6f76-4c86-8914-1155c398ae64',
  obfuscatedClientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET || 'U2FsdGVkX19lFQNOuSCIxirptXyYbw3jNgZaVFasHyJKh6ZH2onWmhwWmxbxh7/ztbVzKZ1O1bYOAcgOMHFsng==',


  // The redirectUri is the URL that the user will be redirected to after they have authenticated with Microsoft Graph API.
  // Likewise, you would not need to change redirectUri if you are using your personal Microsoft account with OneDrive International.
  redirectUri: 'http://localhost',

  // These are the URLs of the OneDrive API endpoints. You would not need to change anything here if you are using OneDrive International
  // or E5 Subscription OneDrive for Business. You may need to change these if you are using OneDrive 世纪互联.
  authApi: process.env.NEXT_PUBLIC_AUTH_API || 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: process.env.NEXT_PUBLIC_DRIVE_API || 'https://graph.microsoft.com/v1.0/me/drive',
  searchApi: process.env.NEXT_PUBLIC_SEARCH_API || 'https://graph.microsoft.com/v1.0/search/query',

  // The scope we require are listed here, in most cases you would not need to change this as well.
  scope: 'user.read files.read.all offline_access',

  // Cache-Control header, check Vercel documentation for more details. The default settings imply:
  // - max-age=0: no cache for your browser
  // - s-maxage=0: cache is fresh for 60 seconds on the edge, after which it becomes stale
  // - stale-while-revalidate: allow serving stale content while revalidating on the edge
  // https://vercel.com/docs/concepts/edge-network/caching
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}




/**
 * This file contains the configuration for the API endpoints and tokens we use.
 *
 * - If you are a OneDrive International user, you would not have to change anything here.
 * - If you are not the admin of your OneDrive for Business account, you may need to define your own clientId/clientSecret,
 *   check documentation for more details.
 * - If you are using a E5 Subscription OneDrive for Business account, the direct links of your files are not the same here.
 *   In which case you would need to change directLinkRegex.
 */
// module.exports = {
  // A disguise to obfuscate required tokens (including but not limited to client secret, access tokens, and refresh tokens)
  // If this is changed, obfuscatedClientSecret should also be changed.
  // Use https://it-tools.tech/encryption to decrypt obfuscatedClientSecret with secret key 'OnePortal',
  // and then use your own secret key to encrypt it again.
  // aesKey: process.env.AES_SECRET_KEY || 'OnePortal',

  // The clientId and clientSecret are used to authenticate the user with Microsoft Graph API using OAuth. You would
  // not need to change anything here if you can authenticate with your personal Microsoft account with OneDrive International.
  // clientId: process.env.NEXT_PUBLIC_CLIENT_ID || '417cc4ee-9ecb-492b-b044-84b668ab811b',
  // obfuscatedClientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET || 'U2FsdGVkX1+r/6m12YyFICHltfXc8L7fdpnP9BDyi9tKMb9uGkCfzvpGsgrmaNQreleblUS5oJ2oE2KXg0HIJw==',

  // The redirectUri is the URL that the user will be redirected to after they have authenticated with Microsoft Graph API.
  // Likewise, you would not need to change redirectUri if you are using your personal Microsoft account with OneDrive International.
  // redirectUri: 'http://localhost',

  // These are the URLs of the OneDrive API endpoints. You would not need to change anything here if you are using OneDrive International
  // or E5 Subscription OneDrive for Business. You may need to change these if you are using OneDrive 世纪互联.
  // authApi: process.env.NEXT_PUBLIC_AUTH_API || 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  //driveApi: process.env.NEXT_PUBLIC_DRIVE_API || 'https://graph.microsoft.com/v1.0/me/drive',
  // searchApi: process.env.NEXT_PUBLIC_SEARCH_API || 'https://graph.microsoft.com/v1.0/search/query',

  // The scope we require are listed here, in most cases you would not need to change this as well.
  //-scope: 'user.read files.read.all offline_access',

  // Cache-Control header, check Vercel documentation for more details. The default settings imply:
  // - max-age=0: no cache for your browser
  // - s-maxage=0: cache is fresh for 60 seconds on the edge, after which it becomes stale
  // - stale-while-revalidate: allow serving stale content while revalidating on the edge
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
  //-cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
//}
