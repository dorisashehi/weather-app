const backgrounds = [
	{
	  code: [1000,3000],
	  day: {
		image: 'https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  night: {
		image: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  alt: 'Sunny'
	},
	{
	  code: [1003, 1006],
	  day: {
		image: 'https://images.pexels.com/photos/3763190/pexels-photo-3763190.jpeg',
	  },
	  night: {
		image: 'https://images.pexels.com/photos/3763190/pexels-photo-3763190.jpeg',
	  },
	  alt: 'cloudy'
	},

	{
	  code: [1009],
	  day: {
		image: 'https://images.pexels.com/photos/573122/pexels-photo-573122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  night: {
		image: 'https://images.pexels.com/photos/4674341/pexels-photo-4674341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  alt: 'Overcast'
	},

	{
	  code: [1030],
	  day: "Mist",
	  night: "Mist",
	  day: {
		image: 'https://images.pexels.com/photos/3933423/pexels-photo-3933423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  night: {
		image: 'https://images.pexels.com/photos/358235/pexels-photo-358235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  alt: 'Mist'
	},


	{
	  code: [1066,1114,1210,1213,1216,1219,1222,1225,1255,1258,1279,1282],
	  day: {
		image: 'https://images.pexels.com/photos/751601/pexels-photo-751601.jpeg',
	  },
	  night: {
		image: 'https://images.pexels.com/photos/358235/pexels-photo-358235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  alt: 'snow'
	},

	{
	  code: [1072,1147,1168,1171,1198,1201],
	  day: {
		image: 'https://images.pexels.com/photos/4311143/pexels-photo-4311143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  night: {
		image: 'https://images.pexels.com/photos/2533339/pexels-photo-2533339.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  alt: 'freezing'
	},


	{
	  code: [1087],
	  day: {
		image: 'https://www.pexels.com/photo/san-francisco-bridge-photo-1006965/',
	  },
	  night: {
		image: 'https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  alt: 'Thundery'
	},
	{
	  code: [1117],
	  day: "Blizzard",
	  night: "Blizzard",
	  day: {
		image: 'https://images.pexels.com/photos/9992257/pexels-photo-9992257.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  night: {
		image: 'https://www.pexels.com/photo/december-blizzard-at-night-in-the-streets-of-vitebsk-19428158/',
	  },
	  alt: 'Blizzard'
	},
	{
	  code: [1135],
	  day: "Fog",
	  night: "Fog",
	  day: {
		image: 'https://images.pexels.com/photos/614512/pexels-photo-614512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  night: {
		image: 'https://images.pexels.com/photos/358235/pexels-photo-358235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  alt: 'fog'
	},

	{
	  code: [1150,1153],
	  day: {
		image: 'https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  night: {
		image: 'https://media.istockphoto.com/id/902497530/photo/cars-driving-on-wet-road-in-the-rain-with-headlights.jpg?s=1024x1024&w=is&k=20&c=ZiEEl66VCqGRuFReYXwjf1OE1mm73Wz0U57tn2dUgzw=',
	  },
	  alt: 'drizzle'
	},

	{
	  code: [1180,1183,1186,1189,1192,1195,1240,1243,1246,1273,1276,1063],
	  day: "Patchy light rain",
	  night: "Patchy light rain",
	  day: {
		image: 'https://images.pexels.com/photos/20383615/pexels-photo-20383615/free-photo-of-people-feeding-pigeons-in-city-during-rain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  night: {
		image: 'https://images.pexels.com/photos/5409363/pexels-photo-5409363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  alt: 'rain'
	},

	{
	  code: [1204,1207,1249,1252,1069],
	  day: "Light sleet",
	  night: "Light sleet",
	  day: {
		image: 'https://images.pexels.com/photos/531972/pexels-photo-531972.jpeg',
	  },
	  night: {
		image: 'https://images.pexels.com/photos/1417647/pexels-photo-1417647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  alt: 'sleet'
	},

	{
	  code: [1237,1261,1264],
	  day: "Ice pellets",
	  night: "Ice pellets",
	  day: {
		image: 'https://images.pexels.com/photos/899353/pexels-photo-899353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	  },
	  night: {
		image: 'https://www.pexels.com/photo/man-wearing-white-full-face-motorcycle-helmet-267961/',
	  },
	  alt: 'ice'
	},




]

export { backgrounds }