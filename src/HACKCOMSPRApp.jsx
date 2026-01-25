import './App.css'
import MainContent from './MainContent'
import Sidebar from './Sidebar'

function HACKCOMSPRApp() {

    const HACKCOMSData = [
        {
            type: "title",
            header: "HACK.COMS Marketing Campaign",
        },
        {
            type: "paragraph",
            content: "HACK.COMS is an annual hackathon hosted by the Computing Organization for Multicultural Students (COMS) at RIT. As the Marketing Director for HACK.COMS 2025, I was responsible for creating the branding and promotional materials for the event. This was the second year where the hackathon was recognized as 'HACK.COMS', which meant a lot of branding and identity work had to be done to establish the event in the RIT community. Below are some of the design elements I created to promote HACK.COMS 2025, including the logo, social media graphics, and event banners."
        },
        {
            type: "paragraph",
            content: "Note that the original posts have a lot of movement, but are displayed here as static images for simplicity. You can view the original posts on the HACK.COMS Instagram page @hack.coms"
        },
        {
            type: "title",
            header: "Brand Color Palette",
        },
        {
            type: "image-gallery",
            // One image will span full width, multiple will flex-wrap
            imageUrls: [
                "./images/HACKCOMSPR/HACKCOMS_palette.png"
            ],
            caption: "The palette stayed consistent from the previous year to maintain brand recognition. The blue comes from COMS signature, while the orange is RIT's signature color."
        },
        {
            type: "title",
            header: "Custom Mascot",
        },
        {
            type: "paragraph",
            content: "I drew additional sprites of the HACK.COMS logo (first image) as a mascot to be used in various promotional materials. This was important as I envisioned a more humorous and playful tone for the campaign, and havign a mascot allows me to personify the event and make it more relatable to the target audience."
        },
        {
            type: "image-gallery",
            imageUrls: [
                "./images/HACKCOMSPR/logo.png",
                "./images/HACKCOMSPR/hack1.png", 
                "./images/HACKCOMSPR/hackcoms_hi.png",
                "./images/HACKCOMSPR/loaf.png"
            ],
            caption: "Custom HACK.COMS Mascot Illustrations drawn in Krita"
        },
        {
            type: "title",
            header: "Promotional Flyers",
        },
        {
            type: "paragraph",
            content: "These are flyers that were printed out to advertise the event."
        },
        {
            type: "image-gallery",
            imageUrls: [
                "./images/HACKCOMSPR/Flyers/1.png", 
                "./images/HACKCOMSPR/Flyers/2.png",
                "./images/HACKCOMSPR/Flyers/3.png",
                "./images/HACKCOMSPR/Flyers/4.png"
            ],
            caption: "By enlarging the mascot and using bold text, I not only improved the composition and visibility of the flyers, but also created a more engaging and eye-catching design that effectively captured the essence of HACK.COMS."
        },
        {
            type: "title",
            header: "Instagram Meme Graphics",
        },
        {
            type: "paragraph",
            content: "To keep the Instagram content fresh and engaging, I created a series of meme graphics that playfully reference the event and its themes."
        },
        {
            type: "image-gallery",
            imageUrls: [
                "./images/HACKCOMSPR/Comics/4.png", 
                "./images/HACKCOMSPR/Comics/3.png",
                "./images/HACKCOMSPR/Comics/2.png",
                "./images/HACKCOMSPR/Comics/1.png"
            ],
            caption: "I drew/edited these in Krita, inspired by popular existing memes."
        },
        {
            type: "title",
            header: "Instagram - Cover Thumbnails",
        },
        {
            type: "paragraph",
            content: "These are the cover thumbnails for some of the Instagram Carousel Posts. These specifically were made a lot later than the posts with the comics, so my composition improved a bit."
        },
        {
            type: "image-gallery",
            imageUrls: [
                "./images/HACKCOMSPR/Covers/Reminders.png",
                "./images/HACKCOMSPR/Covers/Schedule.png",
                "./images/HACKCOMSPR/Covers/Winners.png",
                "./images/HACKCOMSPR/Covers/Outcomes.png",
            ],
            caption: "The reminders was posted on Halloween, hence the mascot's halloween costume. The COMS Mascot is featured in the outcomes cover as a nod to the parent organization."
        }
    ];

    return (
        <>
            <Sidebar />
            <MainContent sections={HACKCOMSData} />
        </>
    )
}

export default HACKCOMSPRApp
