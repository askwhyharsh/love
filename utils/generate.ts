// import Jimp from 'jimp'

// export const generate = async () => {
// 	const fileName = 'NFT_no_.png'
// 	var loadedImage: any;
// 	const imageCaption = 'Loaded'
	
// 	Jimp.read('https://cdn.discordapp.com/attachments/941786627108388904/941786647572410438/NFT_Valo-01.png', (err, nft) => {
// 		if(err) throw "NFT Not loaded";
// 	})
	
// 	Jimp.read(fileName)
// 		.then(function (image) {
// 			loadedImage = image;
// 			return Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
// 		})
// 		.then(function (font) {
// 			loadedImage.print(font, 10, 10, imageCaption)
// 					   .write(fileName);
// 		})
// 		.catch(function (err) {
// 			console.error(err);
// 		});
// }