import DiscordOauth2 from 'discord-oauth2';

export const oauth = new DiscordOauth2({
    clientId: "876779168438829076",
    clientSecret: "ux2u2Qp1M00Kk3GD-J4lWNx2jKxqKmRQ",
});

// oauth.tokenRequest({
// 	clientId: "876779168438829076",
// 	clientSecret: "ux2u2Qp1M00Kk3GD-J4lWNx2jKxqKmRQ",

// 	code: "code",
// 	scope: "identify guilds",
// 	grantType: "authorization_code",
	
// 	redirectUri: "http://localhost/callback",
// }).then(console.log)