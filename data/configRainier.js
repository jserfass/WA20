var config = {
    style: 'mapbox://styles/jserfass/clbpb2eay000c14ng6bzf1koz',
    accessToken: 'pk.eyJ1IjoianNlcmZhc3MiLCJhIjoiY2w5eXA5dG5zMDZydDN2cG1zeXduNDF5eiJ9.6-9p8CxqQlWrUIl8gSjmNw',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Giants of the PNW',
    subtitle: 'Washingtons 20 Most Prominent Peaks',
    byline: '',
    footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'washington',
            alignment: 'full',
            title: 'Giants of the PNW - Washingtons 20 Most Prominent Peaks',
            image: 'rainier.JPG',
            description: 'Peak: Mount Rainier', 
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
            description: "County: Pierce<br>Land Management: Mount Rainier National Park<br>Summit Elevation: 14,410 feet<br>Prominence: 13,210 feet<br>Saddle: 1,200 feet<br><b>Standard Route:</b> Dissappointment Clever<br>Route YDS Rating: Class 3<br>Route NCCS Rating: Grade II<br>Mileage (Round Trip): 14.5<br>Elevation Gain: 9,130 feet<br> <a HREF='/pdf/rainier.pdf' target=_blank> Route Elevation Profile</a>",
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
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'mountrainier2',
            alignment: 'left',
            title: '1) Mount Rainier',
            image: '/pictures/rainier.JPG',
            description: 'Between 1998 and 2015, Harrison Glacier lost 169 acres of surface area (about 37%).',
            location: {
                center: [-121.79910, 46.81388],
                zoom: 11.5,
                pitch: 70.00,
                bearing: 300,
            },
            onChapterEnter: [
                {
                    layer: 'usfspoly',
                    opacity: 0.5,
                }
            ],
            onChapterExit: [
                {
                    layer: 'routes',
                    opacity: 0,
                }
            ]
        },
    ]
};