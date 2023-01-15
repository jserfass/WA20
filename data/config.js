var config = {
    style: 'mapbox://styles/jserfass/clbpb2eay000c14ng6bzf1koz',
    accessToken: 'pk.eyJ1IjoianNlcmZhc3MiLCJhIjoiY2w5eXA5dG5zMDZydDN2cG1zeXduNDF5eiJ9.6-9p8CxqQlWrUIl8gSjmNw',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Giants of the PNW',
    subtitle: 'Washingtons 20 Most Prominent Peaks',
    byline: '',
    //footer: '<h2>Data Utilized in These Maps</h2> <p1>Analysis by Joshua Serfass, 2022<br> National Park Boundaries: <a href="https://public-nps.opendata.arcgis.com/" target="_blank">https://public-nps.opendata.arcgis.com/</a><br> US Forest Service Boundaries: <a href="https://data-usfs.hub.arcgis.com/" target="_blank">https://data-usfs.hub.arcgis.com/</a><br>Route Data: <a href="https://www.peakbagger.com/" target="_blank">https://www.peakbagger.com/</a>, <a href="https://www.strava.com/athletes/18627052" target="_blank">https://www.strava.com/athletes/18627052</a><br></p1><h2>Works Cited</h2><p1>Beckey, F. W. (2008). Cascade Alpine Guide: Climbing & High Routes. Mountaineers Books.</p1><br><p1>Climbing rating systems. Mountain Madness. (n.d.). Retrieved December 12, 2022,from <a href="https://mountainmadness.com/resources/climbing-rating-systems#:~:text=Grade%201%3A%20Easy%20glacier%20route,to%20difficult%2C%20with%20technical%20climbing." target="_blank">https://mountainmadness.com/</a></p1><br><p1>EarthWord – prominence. EarthWord – Prominence | U.S. Geological Survey. (n.d.). Retrieved December 12, 2022, from <a href="https://www.usgs.gov/communications-and-publishing/news/earthword-prominence#:~:text=Definition%3A,the%20summit%20above%20sea%20level." target="_blank">https://usgs.gov/</a></p1><br><a href="https://jserfass.github.io/portfolio/#"><img src="pictures/mountain.png" alt="Home" style="width:100px;height:100px;"></a><br><p1>Portfolio Home</p1>',
    chapters: [
        {
            id: 'washington',
            alignment: 'full',
            title: 'Giants of the PNW - Washingtons 20 Most Prominent Peaks',
            image: 'northcascades.JPG',
            description: "With more than 350 glaciers, 5 volcanoes, and 147 summits with greater than 2,000 feet of prominence, Washington State is well-known for its mountains. Despite their generally lower elevation than the Rockies to the east or the Sierras to the west, The Cascade and Olympic Mountains of Washington have a reputation that precedes them. The peaks are younger, steeper, more heavily glaciated, and taller (vertical relief) than their neighbors to the east and west. Many of Americas greatest mountaineers - The Whittakers, Jim Wickwire, Colin Haley, Steve House, & Fred Beckey, among others - have called the Pacific Northwest home and have used the peaks of Washington State as a training ground for the great ranges of the world.<br><br>There are several categories that can be used to describe the grandness of a mountain peak, but perhaps the most familiar is prominence. According to the <a href='https://www.usgs.gov/communications-and-publishing/news/earthword-prominence#:~:text=Definition%3A,the%20summit%20above%20sea%20level.' target='_blank' style = 'color: white'>USGS</a>, prominence is 'Prominence is a term in topography that refers to the elevation of a summit relative to its surrounding terrain. This is different from its overall elevation, which measures the height of the summit above sea level.' Prominence is a key term in topography for describing the contours of mountain ranges. It’s also important in establishing the relationships between individual summits within a mountain range and can give clues as to how isolated a peak is from its neighbors.<br> <br> Washington has many prominent peaks. As noted above, there are 147 peaks in Washington with greater than 2,000 feet of prominence. Moreover, each of Washington's volcanoes have greater than 4,000 feet of prominence. They would all be above 5,000 feet of prominence if it hadn't been for the St Helens eruption in 1980. Mount Rainier, the tallest peak in Washington at 14,410 feet at the summit, has 13,210 feet of prominence, which makes it the 21st most prominent peak on Planet Earth! It's easy to get focused on the volcanoes, but there are many prominent peaks in Washington. This story is about 20 most prominent peaks in Washington State. The peaks are listed in order, from most to least prominent, in the story that follows. <br>", 
            location: {
                center: [-120.7401, 47.7511],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'usfspoly',
                    opacity: 1
                },
                {
                    layer: 'npspoly',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'usfspoly',
                    opacity: 0
                },
                {
                    layer: 'npspoly',
                    opacity: 0
                }
            ]
        },
        {
            id: 'mountrainier',
            alignment: 'left',
            title: '1) Mount Rainier',
            image: 'rainier.JPG',
            description: "County: Pierce<br>Land Management: Mount Rainier National Park<br>Summit Elevation: 14,410 feet<br>Prominence: 13,210 feet<br>Saddle: 1,200 feet<br><b>Standard Route:</b> Dissappointment Clever<br>Route YDS Rating: Class 3 with glacier travel<br>Route NCCS Rating: Grade II<br>Mileage (Round Trip): 14.5<br>Elevation Gain: 9,130 feet<br> <A HREF='pdf/rainier.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Rainier.html' target=_blank style = 'color: white'> <b>Dissappointment Cleaver</b></a> ",
            location: {
                center: [-121.79910, 46.81388],
                zoom: 11.5,
                pitch: 70.00,
                bearing: 300,
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                 //    opacity: 0
                // }
            ]
        },
        {
            id: 'mountbaker1',
            alignment: 'left',
            title: '2) Mount Baker',
            image: 'pictures/baker.JPG',
            description: "County: Pierce<br>Land Management: Mount Baker-Snoqualmie National Forest<br>Summit Elevation: 10,781 feet<br>Prominence: 8,881 feet<br>Saddle: 1,900 feet<br><b>Standard Route:</b> Easton Glacier<br>Route YDS Rating: Class 2 with glacier travel<br>Route NCCS Rating: Grade III<br>Mileage (Round Trip): 15.3<br>Elevation Gain: 7,753 feet<br> <A HREF='pdf/baker.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Baker.html' target=_blank style = 'color: white'> <b>Easton Glacier</b></a> ",
            location: {
                center: [-121.86391, 48.76770],
                zoom: 11.90,
                pitch: 75,
                bearing: 0,
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ],
        },
        {
            id: 'adams1',
            alignment: 'left',
            title: '3) Mount Adams',
            image: 'pictures/adams.jpg',
            description: "County: Yakima<br>Land Management: Gifford Pinchot National Forest<br>Summit Elevation: 12,276 feet<br>Prominence: 8,116 feet<br>Saddle: 4,160 feet<br><b>Standard Route:</b> South Climb<br>Route YDS Rating: Class 1<br>Route NCCS Rating: Grade I<br>Mileage (Round Trip): 11.3<br>Elevation Gain: 6,811 feet<br> <A HREF='pdf/adams.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Adams.html' target=_blank style = 'color: white'> <b>South Climb</b></a> ",
            location: {
                center: [-121.51951, 46.18231],
                zoom: 12.33,
                pitch: 75.00,
                bearing: -20.00,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'olympus1',
            alignment: 'left',
            title: '4) Mount Olympus',
            image: 'pictures/olympus.JPG',
            description: "County: Jefferson<br>Land Management: Olympic National Park<br>Summit Elevation: 7,969 feet<br>Prominence: 7,829 feet<br>Saddle: 4,160 feet<br><b>Standard Route:</b> Blue Glacier<br>Route YDS Rating: Class 5 with glacier travel<br>Route NCCS Rating: Grade III<br>Mileage (Round Trip): 47.9<br>Elevation Gain: 9,652 feet<br> <A HREF='pdf/olympus.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Olympus.html' target=_blank style = 'color: white'> <b>Blue Glacier</b></a> ",
            location: {
                center: [-123.66586, 47.84532],
                zoom: 10.89,
                pitch: 61.46,
                bearing: 172.53,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'glacier1',
            alignment: 'left',
            title: '5) Glacier Peak',
            image: 'pictures/glacier.jpg',
            description: "County: Snohomish<br>Land Management: Mount Baker-Snoqualmie National Forest<br>Summit Elevation: 10,520 feet<br>Prominence: 7,480 feet<br>Saddle: 3,040 feet<br><b>Standard Route:</b> Sitkum Glacier<br>Route YDS Rating: Class 2 with glacier travel<br>Route NCCS Rating: Grade III<br>Mileage (Round Trip): 35.5<br>Elevation Gain: 11,145 feet<br> <A HREF='pdf/glacier.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Glacier.html' target=_blank style = 'color: white'> <b>Sitkum Glacier</b></a> ",
            location: {
                center: [-121.19691, 48.07774],
                zoom: 12.1,
                pitch: 75,
                bearing: 0.00,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stuart1',
            alignment: 'left',
            title: '6) Mount Stuart',
            image: 'pictures/stuart.JPG',
            description: "County: Chelan<br>Land Management: Okanogan-Wenatchee National Forest<br>Summit Elevation: 9,415 feet<br>Prominence: 5,354 feet<br>Saddle: 4,800 feet<br><b>Standard Route:</b>Cascadian Couloir<br>Route YDS Rating: Class 3<br>Route NCCS Rating: Grade II<br>Mileage (Round Trip): 12.4<br>Elevation Gain: 7,874 feet<br> <A HREF='pdf/stuart.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Stuart.html' target=_blank style = 'color: white'> <b>Cascadian Couloir</b></a> ",
            location: {
                center: [-120.93794, 47.45982],
                zoom: 13.5,
                pitch: 70,
                bearing: 11.9,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'abercrombie1',
            alignment: 'left',
            title: '7) Abercrombie Mountain',
            image: 'pictures/abercrombie.jpg',
            description: "County: Stevens<br>Land Management: Colville National Forest<br>Summit Elevation: 7,308 feet<br>Prominence: 5,168 feet<br>Saddle: 2,140 feet<br><b>Standard Route:</b>Flume Creek<br>Route YDS Rating: Class 1<br>Route NCCS Rating: Grade I<br>Mileage (Round Trip): 8.4<br>Elevation Gain: 2,195 feet<br> <A HREF='pdf/abercrombie.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Abercrombie.html' target=_blank style = 'color: white'> <b>Flume Creek</b></a>",
            location: {
                center: [-117.46134, 48.91815],
                zoom: 13.30,
                pitch: 75,
                bearing: -75
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'round1',
            alignment: 'left',
            title: '8) Round Mountain',
            image: 'pictures/round.jpg',
            description: "County: Skagit<br>Land Management: Mount Baker-Snoqualmie National Forest<br>Summit Elevation: 5,320 feet<br>Prominence: 4,780 feet<br>Saddle: 540 feet<br><b>Standard Route:</b>Southeast Ridge<br>Route YDS Rating: Class 3<br>Route NCCS Rating: Grade I<br>Mileage (Round Trip): 5.9<br>Elevation Gain: 3,971 feet<br> <A HREF='pdf/round.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Round.html' target=_blank style = 'color: white'> <b>Southeast Ridge</b></a>",
            location: {
                center: [-121.75603, 48.30849],
                zoom: 13.71,
                pitch: 74.64,
                bearing: -32.44
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'spickard1',
            alignment: 'left',
            title: '9) Mount Spickard',
            image: 'pictures/spickard.jpg',
            description: "County: Whatcom<br>Land Management: North Cascades National Park<br>Summit Elevation: 8,979 feet<br>Prominence: 4,779 feet<br>Saddle: 4,200 feet<br><b>Standard Route:</b>Depot Creek<br>Route YDS Rating: Class 3 with glacier travel<br>Route NCCS Rating: Grade III<br>Mileage (Round Trip): 22<br>Elevation Gain: 7,400 feet<br> <A HREF='pdf/Spickard.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Spickard.html' target=_blank style = 'color: white'> <b>Depot Creek</b></a>",
            location: {
                zoom: 13.4,
                center: [-121.25722, 48.97171],
                pitch: 50,
                bearing: 30,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Copper1',
            alignment: 'left',
            title: '10) Copper Butte',
            image: 'pictures/copper.jpg',
            description: "County: Ferry<br>Land Management: Colville National Forest<br>Summit Elevation: 7,140 feet<br>Prominence: 4,740 feet<br>Saddle: 2,400 feet<br><b>Standard Route:</b>Old Stage Route<br>Route YDS Rating: Class 1<br>Route NCCS Rating: Grade I<br>Mileage (Round Trip): 5.75<br>Elevation Gain: 1,656 feet<br> <A HREF='pdf/copper.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Copper.html' target=_blank style = 'color: white'> <b>Old Stage Route</b></a>",
            location: {
                center: [-118.44888, 48.70080],
                zoom: 13.34,
                pitch: 71.50,
                bearing: -175.20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'helens1',
            alignment: 'left',
            title: '11) Mount Saint Helens',
            image: 'pictures/helens.jpg',
            description: "County: Skamania<br>Land Management: Gifford Pinchot National Forest<br>Summit Elevation: 8,365 feet<br>Prominence: 4,605 feet<br>Saddle: 3,760 feet<br><b>Standard Route:</b> Worm Flows (Winter)<br>Route YDS Rating: Class 2<br>Route NCCS Rating: Grade II<br>Mileage (Round Trip): 10<br>Elevation Gain: 5,585 feet<br> <A HREF='pdf/helens.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Helens.html' target=_blank style = 'color: white'> <b>Worm Flows (Winter)</b></a> ",
            location: {
                center: [-122.18730, 46.15058],
                zoom: 12.46,
                pitch: 68.64,
                bearing: -49.78
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'threefingers1',
            alignment: 'left',
            title: '12) Three Fingers',
            image: 'pictures/threefingers.jpg',
            description: "County: Snohomish<br>Land Management: Mount Baker-Snoqualmie National Forest<br>Summit Elevation: 6,850 feet<br>Prominence: 4,490 feet<br>Saddle: 2,360 feet<br><b>Standard Route:</b> Tin Can Gap (Winter)<br>Route YDS Rating: Class 3<br>Route NCCS Rating: Grade II<br>Mileage (Round Trip): 31.9<br>Elevation Gain: 6,903 feet<br> <A HREF='pdf/three.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/ThreeFingers.html' target=_blank style = 'color: white'> <b>Tin Can Gap</b></a> ",
            location: {
                center: [-121.77705, 48.18029],
                zoom: 12.53,
                pitch: 62.77,
                bearing: 40.78
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'shuksan1',
            alignment: 'left',
            title: '13) Mount Shuksan',
            image: 'pictures/shuksan.jpg',
            description: "County: Whatcom<br>Land Management: North Cascades National Park<br>Summit Elevation: 9,131 feet<br>Prominence: 4,411 feet<br>Saddle: 4,720 feet<br><b>Standard Route:</b> Sulphide Glacier (Winter)<br>Route YDS Rating: Class 4 with glacier travel<br>Route NCCS Rating: Grade II<br>Mileage (Round Trip): 15<br>Elevation Gain: 6,963 feet<br> <A HREF='pdf/shuksan.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Shuksan.html' target=_blank style = 'color: white'> <b>Sulphide Glacier</b></a> ",
            location: {
                center: [-121.62712, 48.80451],
                zoom: 12.56,
                pitch: 74.13,
                bearing: -23.50
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'remmel1',
            alignment: 'left',
            title: '14) Remmel Mountain',
            image: 'pictures/remmel.jpg',
            description: "County: Okanogan<br>Land Management: Okanogan-Wenatchee National Forest<br>Summit Elevation: 8,685 feet<br>Prominence: 4,365 feet<br>Saddle: 4,320 feet<br><b>Standard Route:</b> Andrews Creek<br>Route YDS Rating: Class 3<br>Route NCCS Rating: Grade II<br>Mileage (Round Trip): 25.7<br>Elevation Gain: 6,660 feet<br> <A HREF='pdf/remmel.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Remmel.html' target=_blank style = 'color: white'> <b>Andrews Creek</b></a> ",
            location: {
                center: [-120.20972, 48.90809],
                zoom: 13.18,
                pitch: 75.00,
                bearing: -109.60
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'jack1',
            alignment: 'left',
            title: '15) Jack Mountain',
            image: 'pictures/jack.jpg',
            description: "County: Whatcom<br>Land Management: Okanogan-Wenatchee National Forest<br>Summit Elevation: 9,066 feet<br>Prominence: 4,211 feet<br>Saddle: 4,880 feet<br><b>Standard Route:</b> South Face via Crater Mountain<br>Route YDS Rating: Class 4 with glacier travel<br>Route NCCS Rating: Grade III<br>Mileage (Round Trip): 16.9<br>Elevation Gain: 11,532 feet<br> <A HREF='pdf/jack.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Jack.html' target=_blank style = 'color: white'> <b>South Face via Crater Mountain</b></a> ",
            location: {
                center: [-120.93077, 48.72300],
                zoom: 12.72,
                pitch: 70.00,
                bearing: -52.80
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'moses1',
            alignment: 'left',
            title: '16) Moses Mountain',
            image: 'pictures/moses.jpg',
            description: "County: Okanogan<br>Land Management: Colville Reservation<br>Summit Elevation: 6,774 feet<br>Prominence: 4,134 feet<br>Saddle: 2,640 feet<br><b>Standard Route:</b> BIA-61 <br>Route YDS Rating: Class 1<br>Route NCCS Rating: Grade I<br>Mileage (Round Trip): 18.2<br>Elevation Gain: 4,111 feet<br> <A HREF='pdf/moses.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Moses.html' target=_blank style = 'color: white'> <b>BIA-61</b></a> ",
            location: {
                center: [-119.11595, 48.35555],
                zoom: 12.72,
                pitch: 70.51,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'deception1',
            alignment: 'left',
            title: '17) Mount Deception',
            image: 'pictures/deception.jpg',
            description: "County: Jefferson<br>Land Management: Olympic National Park<br>Summit Elevation: 7,788 feet<br>Prominence: 4,108 feet<br>Saddle: 3,680 feet<br><b>Standard Route:</b> Royal Basin <br>Route YDS Rating: Class 4 with glacier travel<br>Route NCCS Rating: Grade III<br>Mileage (Round Trip): 23.3<br>Elevation Gain: 6,349 feet<br> <A HREF='pdf/deception.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Deception.html' target=_blank style = 'color: white'> <b>Royal Basin</b></a> ",
            location: {
                center: [-123.15204, 47.84473],
                zoom: 12.36,
                pitch: 65.50,
                bearing: -177.49
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'prophet1',
            alignment: 'left',
            title: '18) Mount Prophet',
            image: 'pictures/prophet.jpg',
            description: "County: Whatcom<br>Land Management: North Cascades National Park<br>Summit Elevation: 7,640 feet<br>Prominence: 4,000 feet<br>Saddle: 3,640 feet<br><b>Standard Route:</b> South Ridge<br>Route YDS Rating: Class 3<br>Route NCCS Rating: Grade II<br>Mileage (Round Trip): 19.1<br>Elevation Gain: 6,924 feet<br> <A HREF='pdf/prophet.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Prophet.html' target=_blank style = 'color: white'> <b>South Ridge</b></a> ",
            location: {
                center: [-121.10935, 48.77866],
                zoom: 12.87,
                pitch: 68.5,
                bearing: -48.80
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'gardner1',
            alignment: 'left',
            title: '19) North Gardner Mountain',
            image: 'pictures/northgardner.JPG',
            description: "County: Okanogan<br>Land Management: Okanogan-Wenatchee National Forest<br>Summit Elevation: 8,956 feet<br>Prominence: 3,996 feet<br>Saddle: 4,134 feet<br><b>Standard Route:</b> Wolf Creek<br>Route YDS Rating: Class 2/3<br>Route NCCS Rating: Grade II<br>Mileage (Round Trip): 25.4<br>Elevation Gain: 7,535 feet<br> <A HREF='pdf/northgardner.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/NorthGardner.html' target=_blank style = 'color: white'> <b>Wolf Creek</b></a> ",
            location: {
                center: [-120.40998, 48.46358],
                zoom: 12.39,
                pitch: 68.00,
                bearing: -76.80
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'hozomeen1',
            alignment: 'left',
            title: '20) Hozomeen Mountain',
            image: 'pictures/hozomeen.jpg',
            description: "County: Whatcom<br>Land Management: North Cascades National Park<br>Summit Elevation: 8,066 feet<br>Prominence: 3,932 feet<br>Saddle: 4,134 feet<br><b>Standard Route:</b> Northeast Face<br>Route YDS Rating: Class 4<br>Route NCCS Rating: Grade II<br>Mileage (Round Trip): 23.3<br>Elevation Gain: 9,064 feet<br> <A HREF='pdf/hozomeen.pdf' target=_blank style = 'color: white'> Route Elevation Profile</a><br>Route Animation: <A HREF='RoutePreview/Hozomeen.html' target=_blank style = 'color: white'> <b>Northeast Face</b></a> ",
            location: {
                center: [-120.98689, 49.00514],
                zoom: 12.25,
                pitch: 67,
                bearing: -166.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'climb',
            alignment: 'full',
            title: 'Rating Climbing Routes',
            image: 'climb.jpg',
            description: "As mentioned previously, each peak has a standard route that is typically both the easiest technically and safest. In the North American mountaineering world, there are two main rating systems employed to designate the difficulty of a route.<br><br>The most well-known system is the Yosemite Decimal System or YDS. The YDS ​“cat­e­go­rizes ter­rain accord­ing to the tech­niques and phys­i­cal dif­fi­cul­ties encoun­tered when rock climb­ing.” The YDS contains 5 classes as follows:<br><br>- Class 1: Hik­ing<br><br>- Class 2: Sim­ple scram­bling, with the pos­si­ble occa­sion­al use of the hands.<br><br>- Class 3: Scram­bling; a rope might be car­ried.<br><br>- Class 4: Sim­ple climb­ing, often with expo­sure. A rope is often used. A fall on Class 4 rock could be fatal. Typ­i­cal­ly, nat­ur­al pro­tec­tion can be eas­i­ly found.<br><br>- Class 5: Where rock climb­ing begins in earnest. Climb­ing involves the use of a rope, belay­ing, and pro­tec­tion (nat­ur­al or arti­fi­cial) to pro­tect the leader from a long fall. Fifth class is fur­ther defined by a dec­i­mal and let­ter sys­tem – in increas­ing and dif­fi­cul­ty. The rat­ings from 5.10−5.15 are sub­di­vid­ed in a, b, c and d lev­els to more pre­cise­ly define the dif­fi­cul­ty (for exam­ple: 5.10a or 5.11d).<br><br>The Nation­al Climb­ing Clas­si­fi­ca­tion Sys­tem (NCCS) is the other prominent (pun intended) classification system in North America. The NCCS describes 'the over­all nature of a climb in terms of time and tech­ni­cal dif­fi­cul­ty tak­ing the fol­low­ing into account: length of climb, num­ber of hard pitch­es, dif­fi­cul­ty of hard­est pitch, aver­age dif­fi­cul­ty, com­mit­ment, route find­ing prob­lems, and over­all ascent time. It is often call the ​com­mit­ment grade.' It's worth noting that the approach and remote­ness of a climb might not affect the grade. Many of the 20 peaks included in this story are located in the North Cascades, which is known for long, arduous approaches - something to consider when looking at NCCS grades for thiese peaks. The NCCS contains 7 classes as follows:<br><br>- Grade I: Less than half a day for the tech­ni­cal por­tion<br><br>- Grade II: Half a day for the tech­ni­cal por­tion.<br><br>- Grade III: Most of a day for the tech­ni­cal por­tion.<br><br>- Grade IV: A full day of tech­ni­cal climb­ing, gen­er­al­ly at least 5.7.<br><br>- Grade V: Typ­i­cal­ly requires an overnight on the route.<br><br>- Grade VI: Two or more days of hard tech­ni­cal climb­ing.<br><br>- Grade VII: Remote big walls climbed in alpine style.<br><br>None of the 20 most prominent peaks in Washington exceed a YDS rating of 5.4 (Mount Olympus), or a Grade III NCCS rating, though there are many peaks throughout the state that do. What does it take to climb the 20 most prominent peaks in Washington? Use the 3D interactive map below to find out!<br>", 
            location: {
                center: [-120.7401, 47.7511],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
            },
        },
    ]
};