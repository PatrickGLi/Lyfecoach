# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

event_type = ["Food & Drink", "Art", "Music", "Nightlife", "Sports & Fitness"]

User.create!(email: "templenightclub@gmail.com",
             first_name: "Temple",
             last_name: "Nightclub",
             host_name: "Temple Nightclub",
             description: "A venue for artists, by artists, #TheNewTemple offers a nightlife experience that is unrivaled in the San Francisco Bay Area. From awe-inspiring, fully immersive state of the art lighting and visuals, to a thumping custom sound system, multiple rooms of music, paired with world-class talent.

On the street level lies the main nightclub where guests will find a custom DJ booth, thundering Void sound system, and 50,000 addressable, floor-to-ceiling LED bulbs. Surrounding the dance floor are seven VIP booths, which offer a high-energy experience for guests who wish to be at the center of the action.

At the forefront of the dance floor is the main stage, which has been designed specifically to showcase our world-renowned artists, DJs, and performers. The main room is complete with three box suites and four mezzanine tables that hover above the main dance floor, and are capable of accommodating larger group parties.

Situated directly beneath the main room is LVL 55, Temple’s futuristic lower level. Complete with fifteen VIP tables, a custom-made DJ booth, and low hanging ceilings, LVL 55 elicits a more underground atmosphere for guests who prefer to venture away from the main room sound.

Entering LVL 55, guests will encounter custom-made LED lights emanating from columns throughout, accompanied with the thundering sound of our Void sound system. For guests looking for a more intimate nightlife experience, LVL 55 is the ideal venue.

At #TheNewTemple Nightclub, we've created a whole new nightlife experience and we want you to be a part of it—we can’t wait to see you on the dance floor!",
             password: "password123",
             url: "/v1450658256/16034121_zjlywr.jpg",
             background_url: "/v1450654179/photo-1445965752525-ac2d3c195ffe_p1biyr.jpg")

User.create!(email: "1015folsom@gmail.com",
             first_name: "1015",
             last_name: "Folsom",
             host_name: "1015 Folsom",
             description: "San Francisco is home to one of the most vibrant nightlife scenes in North America and sitting right at the heart of it is 1015 Folsom. Since 1986, 1015 has been home to some of the most notable events in the Bay Area. From long running legendary weeklies like Release, Nikita and Spundae to annual events like the Get Freaky Afterburn and Gus Presents massives, this 2000 person venue has always been one of the IT spots in a city filled with options.

The vast 20,000 square foot space, which houses 5 separate rooms, each with full bars and DJ booths, allows for parties of virtually every size and scale. The modern decor boasts only the finest finishes, featuring Brazilian hardwood dance floors, sterling silver tiles and cracked glass bar tops. Spectacular design features abound including a 400 square foot water-wall with video display capacities, a custom color changing room, and a dramatic 40 tall tastefully appointed Moroccan mezzanine.

Housing the city’s most advanced and powerful lighting and sound systems, the club technological effects are legendary. Generating over 150,000 watts of premium sound, the clubs precisely engineered sound environments provide the perfect showcase for both live and DJ entertainment.",
             password: "password123",
             url: "/v1450654179/photo-1446071103084-c257b5f70672_k3ipzm.jpg",
             background_url: "/v1450654179/photo-1447653880973-a426557098a9_kvowym.jpg")

 User.create!(email: "rubyskye@gmail.com",
              first_name: "Ruby",
              last_name: "Skye",
              host_name: "Ruby Skye",
              description: "Ruby Skye is San Francisco's premiere Nightclub and Special Event Venue. It is conveniently located in the heart of downtown SF just off of Union Square and the famed theatre district. Whether you're a seasoned club enthusiast, looking to go out for a memorable evening, or wish to host a private event, Ruby Skye is available for all your entertaining needs.

Ruby Skye's exquisitely appointed facility was built in the 1890's and is a historical landmark that formerly housed - Stage Door Theatre. A turn of the century victorian playhouse restored with all the high tech accoutrement, Ruby Skye's interiors were designed by Pamela Pennington Studios and present a striking juxtaposition between its original Art Nouveau architecture and its plush modern furnishings.

This impeccably appointed space is perfect setting for launch parties, wedding and receptions, benefits and fashion shows. The possibilities are endless for entertaining in this unique, and upscale entertainment venue.

Ruby Skye is in a class all by itself, innovative menu choices and our attention to detail at every level.",
              password: "password123",
              url: "/v1450654168/dpzDUkJrTHb71Yla1EzF_IMG_4098_qzifm7.jpg",
              background_url: "/v1450654178/photo-1446057032654-9d8885db76c6_oroacc.jpg")

User.create!(email: "regencyballroom@gmail.com",
             first_name: "Regency",
             last_name: "Ballroom",
             host_name: "So Cute! Tour",
             description: "Tour Dates 2015
12.2.15 - Lincoln - Nebraska- Vega - So Cute! Tour w/ Slow Magic & Lindsay Lowend - Tickets
12.3.15 - Denver - Colorado- Gothic Theater - So Cute! Tour w/ Slow Magic & Lindsay Lowend - Tickets
12.4.15 - Salt Lake City - Utah - Urban Lounge - So Cute! Tour w/ Slow Magic & Lindsay Lowend - Tickets
12.5.15 - Boise - Idaho - Knitting Factory - So Cute! Tour w/ Slow Magic & Lindsay Lowend - Tickets
12.8.15 - Bellingham - Washington - Wild Buffalo - So Cute! Tour w/ Slow Magic & Lindsay Lowend - Tickets
12.9.15 - Vancouver - British Columbia - Fortune Sound - So Cute! Tour w/ Slow Magic & Lindsay Lowend - Tickets
12.10.15 - Victoria - British Columbia - DISTRIKT - So Cute! Tour w/ Slow Magic & Lindsay Lowend - Tickets
12.11.15 - Seattle - Washington - Showbox - So Cute! Tour w/ Slow Magic & Lindsay Lowend - Tickets
12.12.15 - Portland - Oregon - Wonder Ballroom - So Cute! Tour w/ Slow Magic & Lindsay Lowend - Tickets
12.13.15 - Eugene - Oregon - Hi-Fi - So Cute! Tour w/ Slow Magic & Lindsay Lowend - Tickets
12.16.15 - Arcata - California - Arcata Theater - So Cute! Tour w/ Slow Magic & Lindsay Lowend - Tickets
12.17.15 - San Francisco - California - Regency Ballroom - So Cute! Tour w/ Slow Magic & Lindsay Lowend - Tickets
12.18.15 - Los Angeles - California - Fonda - So Cute! Tour w/ Slow Magic & Lindsay Lowend - Tickets
12.19.15 - Santa Ana - California - Observatory - So Cute! Tour w/ Slow Magic & Lindsay Lowend - Tickets
12.20.15 - San Diego - California - Observatory North Park - So Cute! Tour w/ Slow Magic, Lindsay Lowend & Gupi - Tickets",
             password: "password123",
             url: "/v1450654174/photo-1420161900862-9a86fa1f5c79_b1hev9.jpg",
             background_url: "/v1450654174/photo-1418272443502-f4af3b83661e_ajxddd.jpg")


 User.create!(email: "caroljohnstone@gmail.com",
              first_name: "Carol",
              last_name: "Johnstone",
              host_name: "JCCSF",
              description: "Carol Johnstone is the Founder of PopStar Booty Camp, a pop-up dance class organization focused on re-creating popstar music videos and live performances.  Carol managed Beyoncé's featured dancers, LES TWINS (Larry & Laurent Bourgeois) from 2010-2012 and organizes private dance classes and flash mob events.",
              password: "password123",
              url: "/v1450654178/photo-1445258975206-cb4c5d8031d1_oegmcg.jpg",
              background_url: "/v1450772148/photo-1448318440207-ef1893eb8ac0_vji9ei.jpg")

User.create!(email: "cannonproductions@gmail.com",
             first_name: "Cannon",
             last_name: "Productions",
             host_name: "Cannon Productions",
             description: "Cannon Productions is an event management company dedicated to producing unforgettable experiences for its guests, host cities, clients and sponsors. As the world gets larger the demand for social living options increases, we strive to fill this void and realize that in order to have an unforgettable experience it should make a huge splash and leave a lasting impression. By bringing people together, we create events that both celebrate tradition and ignite new interests through the spirit of curiosity and exploration.
",
             password: "password123",
             url: "/v1450654167/DHHQbqc0RrWVf0uDNe5E_The_Litte_Cafe_lma7do.jpg",
             background_url: "/v1450644799/photo-1442406964439-e46ab8eff7c4_enfcny.jpg")

User.create!(email: "sacramentorepublic@gmail.com",
            first_name: "Sacramento",
            last_name: "Republic",
            host_name: "Sac Republic FC",
            description: "Sacramento Republic FC are the 2014 USL Champions. The club host their home matches at Bonney Field located on the grounds of Cal Expo. The club’s motto is urbs indomita – Indomitable City. Indomitable Club. The club’s commitment to position Sacramento as an “indomitable city” is evident through its community investments and efforts to procure an MLS franchise and soccer-specific stadium in The Railyards.
The club is “Built for MLS” with the highest caliber of talent, both on and off the pitch. For more information, visit www.SacRepublicFC.com.",
            password: "password123",
            url: "/v1450644798/photo-1431817986760-7cc7fbb937b2_sjfawl.jpg",
            background_url: "/v1450644793/photo-1418846531910-2b7bb1043512_nheg6j.jpg")

User.create!(email: "partiesthatcook@gmail.com",
            first_name: "PartiesThatCook",
            last_name: "Inc.",
            host_name: "Parties That Cook",
            description: "Parties That Cook offers a unique opportunity to engage with exceptional cooking classes in San Francisco – a city that's famous for exceptional food. Experience new ingredients. Savor a guided tour through a new cuisine. Meet new people at a singles cooking class event. New cooking classes are added all the time so bookmark this page and check back often.",
            password: "password123",
            url: "/v1450654175/photo-1426869884541-df7117556757_detk2b.jpg",
            background_url: "/v1450654178/photo-1446034730750-a0b64d06ad13_lrpp9c.jpg")

User.create!(email: "guestlogin@gmail.com",
            first_name: "Guest",
            last_name: "Login.",
            host_name: "Lyfecoach Guest",
            description: "Thank you for visiting lyfecoach.",
            password: "password123")

User.create!(email: "patrickli727@gmail.com",
            first_name: "Patrick",
            last_name: "Li",
            host_name: "Pat Li",
            description: "Hi. Leave a message below if you find this. Cheers :)",
            password: "password123")

Event.create!(title: "Big Boi (DJ Set) with Special Guest Falcons",
              location: "1015 Folsom St, San Francisco, CA 94103",
              start_date: 1453363200000,
              end_date: 1453449600000,
              start_time: 22,
              end_time: 2,
              description: "Outside his primary role as partner to André 3000 in OutKast and as one of the central members of The Dungeon Family, Big Boi (born Antwan André Patton) appeared on tracks by Missy Elliott (“All N My Grill”), Trick Daddy (“In da Wind”), Jay-Z (“Poppin’ Tags”), Killer Mike (“A.D.I.D.A.S.”), Beyoncé (“Hip Hop Star”), Brooke Valentine (“Girlfight”), Sleepy Brown (“Margarita”), and Fantasia (“Hood Boy”). As a solo artist, the MC had a hit in 2005 with “Kryptonite (I’m on It),” one of the year’s best rap singles; it was the lead single from the officially released showcase for his Purple Ribbon label, the eclectic Got Purp?, Vol. 2, which featured the likes of Killer Mike and Sleepy Brown, as well as protégé Janelle Monáe.

Also involved in film (ATL, OutKast’s Idlewild,Who’s Your Caddy?) and even the stage (he worked with the Atlanta Ballet in 2008), Big Boi prepped his first solo album, the loose and rollicking Sir Lucious Left Foot...The Son of Chico Dusty, which was released on Def Jam in July 2010. It debuted at number three on the Billboard 200 chart. Vicious Lies and Dangerous Rumors, issued in December 2012, was just as packed with guest appearances but extended far beyond the realm of rap to involve the likes of Little Dragon, Wavves, and Phantogram which paved the path for his latest project Big Grams.",
              ticket_max: 1000,
              price: 24.99,
              view_count: rand(1000..100000),
              url: "/v1450644794/https_proxy_2_qrjg6x.jpg",
              category: "Music",
              lat: 37.778127,
              lng: -122.405787,
              organizer_id: 2
        )

Event.create!(title: "Metro Boomin with Special Guest Twrk",
              location: "1015 Folsom St, San Francisco, CA 94103",
              start_date: 1454054400000,
              end_date: 1454140800000,
              start_time: 22,
              end_time: 2,
              description: "At only 21 years old, Metro Boomin has become one of hip-hop’s most sought after producers and DJ’s, working with some of the genre’s biggest stars, a list of names that includes Future, Drake, Kanye West, Nicki Minaj 2 Chainz, Gucci Mane, YG, Ludacris, Wiz Khalifa, Travi$ Scott, Young Thug, Meek Mill, and more.

Born Leland Wayne, Metro, a St. Louis native, first started making beats at 13, an aspiring rapper who convinced his mother to buy him his first laptop as a birthday present. Upon graduating high school, Metro moved to Atlanta, to attend Morehouse College, dropping out following his first semester after, he found himself in the studio more than the classroom, crafting hits for artists like Future, Ludacris, Gucci Mane, and others. The first of those hits, the Billboard-charting “Karate Chop,” is the the result of what has since become a long-running, undeniable partnership with one of hip-hop’s biggest stars, Future. The two first began working together in 2012, churning out popular mixtape tracks like developing a relationship that led to Metro producing four songs from Future’s sophomore album, Honest – “Karate Chop” was joined by fellow singles “Honest” and the Kanye West-featuring “I Won,” along with album bonus track “How Can I Not.” More recently, Metro executive produced Future’s fan-favorite mixtape, MONSTER, as well as Future’s third solo album, DS2, on which he also contributed production to 11 of the album’s 13 tracks. DS2 debuted at #1 on the Billboard Top 200 Albums chart.

Metro’s continued collaborations with Future are complemented by key contributions to projects from artists like Nicki Minaj (“Want Some More” from her now-platinum Pinkprint), Meek Mill (“Check” and “Jump Out The Face” from his chart-topping Dreams Worth More Than Money), Makonnen (his platinum debut single “Tuesday”), and many others, including Travi$ Scott, with Metro producing five songs on the rapper’s forthcoming Epic Records debut, Rodeo.

Despite all of this success, it’s the work that Metro has done building and solidifying his own brand that has proved most fruitful – indeed, the producer’s “Metro Boomin Want Some More!” tag has become one of the best known in all of popular music. That charge has been led not only by solo projects, like Metro’s widely acclaimed debut mixtape, 19 & Boomin, with plans for new releases in the coming months, but also with his move into the live music and DJ space, as Metro continues to take his patented sound and high-impact, high-energy show on the road. Earlier this year, Metro joined Travi$ Scott and Young Thug on the road for the Rodeo Tour, and this fall, Metro will hit the road again, this time with Chance The Rapper, for the rapper’s Family Matters Tour.

As the accomplishments continue to stack, it’s safe to say that Metro has experienced more success at 21 than most do in a lifetime. Despite that success, Metro is working to find new and exciting ways to interact with his fans and engage new audiences, alike, working tirelessly towards his goal of becoming one of music’s most dominant names. Metro Boomin want some more, indeed.",
              ticket_max: 1000,
              price: 19.99,
              view_count: rand(1000..3000),
              url: "/v1450654168/https_proxy_3_xmmpin.jpg",
              category: "Music",
              lat: 37.778127,
              lng: -122.405787,
              organizer_id: 2
        )

Event.create!(title: "The Lonely Hearts Club 2016 Ft. Darius + Autograf Ekali",
              location: "1015 Folsom St, San Francisco, CA 94103",
              start_date: 1455264000000,
              end_date: 1455350400000,
              start_time: 22,
              end_time: 3,
              description: "Darius is an uprising French artist, known as an inaugural player of a recent House music movement taking its roots in France and quickly spreading around the world. Infused by the uplifting beat of Disco and Funk, Darius add a certain underground intricacy to his music, setting himself alongside his successful house compatriots. After his standard setting jewel 'Maliblue', Terrence N'Guyen was a key part in bringing Cherokee to the international scene.

No superhero but still as good without a sidekick, he is now garnering attention for his solo act. In 2013, Darius has played alongside industry big names such as Super Discount, Ben Pearce, Yuksek or Cyril Hahn to name a few. Either in his 'Velour' EP or in his remixes of follow DJs, as a duo or solo, in France or America, everybody wants to hear the distinctive Darius touch. In February he released his 'Romance' EP that explores even further his beloved dreamlike aesthetics.

One of the most exciting young talents to emerge from France, DJ / producer Darius released new single 'Helios', the title track from his similarly titled EP out on Roche Musique April 20th 2015.",
              ticket_max: 1000,
              price: 24.99,
              view_count: rand(1000..100000),
              url: "/v1450657532/20160212_lonelyhearts1_hlqubz.jpg",
              category: "Music",
              lat: 37.778127,
              lng: -122.405787,
              organizer_id: 2
        )

Event.create!(title: "Temple Presents Oliver Heldens",
              location: "540 Howard St, San Francisco, CA 94105",
              start_date: 1458370800000,
              end_date: 1458457200000,
              start_time: 23,
              end_time: 4,
              description: "We welcome 2016 with an incredible 1 Year Anniversary Celebration of #TheNewTemple with Oliver Heldens

At the mere age of 17, Oliver Heldens was signed to Spinnin' Records, the most renowned label in dance music. With the release of his hit single \"Gecko\" in 2013 he reached the #1 spot in the UK chart, a #2 spot in Beatport's top 100 and it held the #1 spot on the Deep House chart for over a month. After the success of 'Gecko' Oliver hit the UK Charts again with 'Koala' followed by collaborations with Sander van Doorn, Zeds Dead and Shaun Frank to name a few. He has established residencies at two of the most prestigious nightclubs in the world - Omnia in Las Vegas and Ushuaïa in Ibiza. Now just a few years after his first record deal, Heldens who was already named 'Artist to Watch' by Rolling Stone launched his own record label Heldeep Records and revealed himself as HI-LO, who is responsible for the first release on Heldeep Records. We can reinsure you that this 20-year-old has a long music career ahead of him and he will continue to bring a unique, refreshing sound that bridges the gap between EDM and the underground.

Twitter: https://twitter.com/OliverHeldens
Soundcloud: https://soundcloud.com/oliverheldens
Instagram: http://instagram.com/oliverheldens
Snapchat: oliverheldens

Contact us at 415.312.3668 or vip@templesf.com to make a reservation",
              ticket_max: 1700,
              price: 29.99,
              view_count: rand(1000..100000),
              url: "/v1450664428/oliver_temple_vgkgvq.jpg",
              category: "Music",
              lat: 37.787917,
              lng: -122.397236,
              organizer_id: 1
        )
Event.create!(title: "Temple Presents Bingo Players",
              location: "1015 Folsom St, San Francisco, CA 94103",
              start_date: 1454054400000,
              end_date: 1454140800000,
              start_time: 22,
              end_time: 2,
              description: "AMaarten Hoogstraten wasn't like other kids his age. When he was 10, his friends were buying toys to play with, but Maarten was already spending his cash on vinyl and CDs.

\"You know how it starts,\" he said with a chuckle. \"I was the one who bought records when I was young, I bought lots of vinyl, seven-inches, twelve inches, and when CDs came about I bought a lot of CDs, growing up, I spent all my money on music.\"
The producer behind the hit EDM act, Bingo Players, got hooked on electronic music when he was a kid, listening to The Prodigy's \"Out of Space,\" and wishing he could make the kind of tunes that were being played on Dutch radio. But, at the time, to make dance music, you needed physical equipment-synthesizers and drum machines-far out of his reach at his age.

When he was a teenager, two events would change his life. An early music software program called ProTracker was released, and he would meet Paul Baümer, who would become his musical partner for the better part of the next 15 years until he suddenly passed away from cancer in 2013.

Maarten met Paul through his younger brother in Enschede, Holland, a two-hour drive from Amsterdam. One day, he went over to hang out with Paul's younger brother, and found that Paul was also making music using ProTracker software. \"It was only four channels and was really basic, but it was a start and really fun to do.\"
\"When we discovered we were both making similar sounding music with the same program we started spending all our time together and became friends right away'\" said Maarten.

Over the next decade they began recording; and in 2006 they began recording under the moniker, Bingo Players. Their tracks started to resonate with the EDM crowds in America and abroad. Their songs- featuring buzzing, bouncing synthesizers, crunchy, guitar-like riffs reminiscent of the Chemical Brothers, and powerful, driving beats- are shaped by a memorable lyrical hook or a melody. 2009's \"Devotion\" utilizes the catchy vocal hook, and sets it against a funky infectious saxophone riff and syncopated backbeat.

\"Most of the time we'd just start with a melody. Then a song would just evolve,\" said Maarten of their songwriting process. \"We can connect with a song if the melody is strong even though it can still be bare bones. We need to sing along or whistle along or to have an earworm, you know what I mean? Something that sticks in your head.\"

Their breakout hit \"Cry (Just a Little),\" featured a re-recording of the hook from a 1988 Brenda Russell song, \"Piano in the Dark.\" With the memorable lyric looping around an ebullient melody, it became an instant crossover anthem.
\"I was watching VH1 and I saw this 'Back to the 80s' program where they played this Brenda Russell song and I thought, 'Hey, this particular part of the song sounds really cool, maybe we could do something with it in our own style?'\"

Though they didn't start out as DJs, once the demand grew for them to play out live, they learned how to mix on CDJs. Soon, they became regulars on the EDM circuit, playing massive festivals, like Electric Daily Carnival, Tomorrowland, and Coachella.

\"I think we started to become better producers once we started to DJ,\" he said, noting that they would bring new tunes on the road and play for a crowd to gauge their reaction.

In between playing festivals and clubs around the world, the duo found the time to start their own label, Hysteria (a hat tip to Def Leppard, one of their favorite bands), releasing singles from Carl Tricks (\"Mad Dash\"), MAKJ (\"Springen\"), and Henry Fong (\"Jump\") as well as Bingo Players tunes.

In 2013, they scored one of their biggest coups. An updated version of their 2011 track, \"Rattle,\" titled, \"Get Up\" (Rattle),\" with LA-based act, Far East Movement, rapping over a bouncy, catchy beat, became a instant hit. When they first played the tune back in 2011, Maarten and Paul didn't know if audiences liked it, but then, the single started to pick up steam around the world and slowly continued to grow.
It eventually charted in the Top Ten around the world including; Germany, Austria, France, and Australia (where it ended up going double Platinum), Gold in Canada, reaching the coveted #1 spot in the UK charts, and selling over 200,000 records in the U.S., reaching #5 on the dance charts. The success of the single, and the quirky, humorous video featuring ducks squaring off against hoodlums (which now has over 40 million views) helped propel Bingo Players high into the DJ Mag Top 100 list last year.

But in June 2013, at the height of their success, Paul suddenly fell ill. He was diagnosed with cancer. Everyone was shocked. Despite the prognosis, Paul remained optimistic.

In October, Paul took a turn for the worse and he passed away in December 2013. There was an outpouring of support from the EDM community with peers like Hardwell, Steve Aoki, Kaskade, Skrillex and Armin Van Buuren paying tribute on social media, at shows and in the press.

Maarten was stunned and didn't know what to do. But Paul's last wishes were for his best friend and his musical partner to keep making music.

He always said to me, \"If you can find solace and continue what we started, please do so. Please continue the music. Carry on the Bingo Players flag,'\" said Maarten.
He wasn't sure if he could carry on. But, he said, \"I took a holiday, took some time off to clear my head and think about things. I thought, \"Yeah Paul's right. I should continue, and continue the name and continue his legacy.\"

After all, they have a library of finished tracks and ideas they worked on together that have yet to be released and Maarten can continue his and Paul's dream of making the music that they heard on the radio as kids. The scene might have gotten bigger, and the production might be made on something more sophisticated than ProTracker, but, says Maarten, \"The vibe is still the same. People want to have a good time, come together, and experience the music.\"

And Bingo Players live on.

Contact us at 415.312.3668 or vip@templesf.com to make a reservation",
              ticket_max: 1000,
              price: 24.99,
              view_count: rand(1000..10000),
              url: "/v1450665186/16034095_sactjn.jpg",
              category: "Music",
              lat: 37.787917,
              lng: -122.397236,
              organizer_id: 1
        )

Event.create!(title: "Ruby Skye & Control Present EPHWURD",
              location: "420 Mason St, San Francisco, CA 94109",
              start_date: 1452758400000,
              end_date: 1452844800000,
              start_time: 21,
              end_time: 2,
              description: "EPHWURD [SF DEBUT] & AUTOEROTIQUE Ruby Skye Thursday, January 14, 2016 at 9:00 PM (PST) San Francisco, CA",
              ticket_max: 1000,
              price: 14.99,
              view_count: rand(1000..50000),
              url: "/v1450654167/01-15-16_Awakening_Ephwurd_450x8002_spesxh.jpg",
              category: "Music",
              lat: 37.787566,
              lng: -122.409595,
              organizer_id: 3
        )

Event.create!(title: "Ruby Skye Presents HOOK N SLING & ELEPHANTE",
              location: "420 Mason St, San Francisco, CA 94109",
              start_date: 1453363200000,
              end_date: 1453449600000,
              start_time: 22,
              end_time: 4,
              description: "Ruby Skye Presents
HOOK N SLING & ELEPHANTE
FRIDAY, JANUARY 22
BUY TICKETS NOW
",
              ticket_max: 1000,
              price: 19.99,
              view_count: rand(1000..50000),
              url: "/v1450657532/03124_pj9fpe.jpg",
              category: "Music",
              lat: 37.787566,
              lng: -122.409595,
              organizer_id: 3
        )

Event.create!(title: "Giraffage ft. Slow Magic",
              location: "1300 Van Ness Ave, San Francisco, CA 94109",
              start_date: 1457164800000,
              end_date: 1457251200000,
              start_time: 20,
              end_time: 2,
              description: "A DIY project with worldwide scope, Slow Magic is universal and inclusive. It’s cosmic electronic music culled from the ether, yet crafted with human hands. It’s joyous, escapist, multi-disciplinary art that mixes transcendent performance with the nostalgic intimacy of two teenagers staying up too late on the phone.

After the release of 2012’s beloved and critically-acclaimed Triangle, Slow Magic became an international movement after touring with artists like Gold Panda and XXYYXX. Crowds found a masked man in their midst, bathed in fantastic light, with electronic triggers and a drum. The future-primitive combination infused the project’s electronic compositions with new life.

How To Run Away, Slow Magic’s debut with Downtown Records, reflects this growth, oozing both otherworldly beauty and a mastery of production. Lead single “Girls” is deconstructionist house with an organic pulse and collaged, handcrafted samples. “Hold Still” sculpts elastic organs and jazz piano into an emotionally-pummeling finale, while the melancholy “Let U Go” merges watery dub with spectral piano and “Closer” plays like a ‘90s R&B fever dream.

Slow Magic is music by your imaginary friend.

Giraffage is San Francisco-based producer and beat guru, Charlie Yin. His signature sound of electronic pop has won him praise from musical tastemakers Pitchfork, FADER and XLR8R. He burst onto the music scene with his debut Pretty Things EP. It was immediately followed by his dreamy synth-pop debut album, Comfort, which XLR8R called “[an] ebullient slice of electronic pop
 … [with] pleasantly ambient and sample-laden instrumentals.” In February 2013, he released his lush Needs mixtape via Alpha Pup Records, showing his versatility as a producer and “omnivorous music lover,” as noted by Pitchfork. Giraffage’s staying power was fully cemented when he remixed one the sexiest albums of the decade, The-Dream’s Love/Hate, and turned it on its head.FADER
 backed the project saying, “Trying to remember a moment of anticipation right before hitting the play button as happy as the one I just experienced.” He most recently dropped his No Reason EP via Fool’s Gold, the first release to ever feature Charlie’s original work. He has toured with Phantogram, Flume, XXYYXX and served as the main support on Porter Robinson’s massive “Worlds Tour.” He has performed at staple music festivals such as Treasure Island, HARD Day of The Dead, Splash House, Lightning in a Bottle and Roskilde in Europe.",
              ticket_max: 3000,
              price: 25.00,
              view_count: rand(3000..100000),
              url: "/v1450739579/SA_Giraffage_Sickest-Addictions_Sick-Addicts_2012_k0bfxj.jpg",
              category: "Music",
              lat: 37.752211,
              lng: -122.416472,
              organizer_id: 4
        )

Event.create!(title: "Justin Bieber's SORRY dance class (weeknight in SF, 6 weeks, Jan. start)",
              location: "3200 California Street San Francisco, CA 94109",
              start_date: 1457938800000,
              end_date: 1457938800000,
              start_time: 19,
              end_time: 21,
              description: "Wow!  The Tuesday night Justin Bieber SORRY dance class sold out in 2 hours, so we're creating a wait list for those interested in adding another weeknight San Francisco class.  We'll be learning Request Dance Crew's viral video version of The Bieb's official music video in 6 weeks and we'll all get a chance to perform it at the end of February.

Please add your name to this wait list so we can contact you with details on the additional class (most likely Monday night).  Should know the skinny by Dec. 5 - thanks!",
              ticket_max: 500,
              price: 6.00,
              view_count: rand(3000..4000),
              url: "/v1451184345/photo-1443745029291-d5c27bc0b562_uqfmhr.jpg",
              category: "Art",
              lat: 37.787374,
              lng: -122.447355,
              organizer_id: 5
        )

Event.create!(title: "ArtSpan Artist Reception at the Mosser Hotel Exhibition",
              location: "54 4th Street San Francisco, CA 94103",
              start_date: 1463727600000,
              end_date: 1463727600000,
              start_time: 15,
              end_time: 21,
              description: "*Appetizers & Beverages Catered by The Mosser Hotel*

Featuring ArtSpan Artists:

Michele de la Menardiere, Mel Smothers, Holly Coley, & Nobuhiro Sato

Please join us to celebrate the artists and the exhibition, on display December 15th, 2015, through February 1st, 2016.

About the Art-in-Neighborhoods program:

The Art-In-Neighborhoods program strives to create visibility and accessibility for local arts in San Francisco by connecting communities with local artists and activating vacant spaces with vibrant, locally made artwork. We partner with local businesses and building owners to bring pop-up art exhibitions and art events to dormant storefronts, empty spaces for lease, and businesses seeking artwork for their walls. Local artists who are ArtSpan members are given the opportunity to display, promote and sell their artwork in these diverse venues. The Art-in-Neighborhoods program allow otherwise unused properties/spaces to become creative arenas for celebrating local arts",
              ticket_max: 500,
              price: 49.99,
              view_count: rand(40000..70000),
              url: "/v1450654174/photo-1420802532821-8a885e88e95c_mbcfba.jpg",
              category: "Art",
              lat: 37.784883,
              lng: -122.405142,
              organizer_id: 5
        )



Event.create!(title: "24th Annual Winter WINEland ~ 2016",
              location: "Wine Road, Sonoma County, California, US",
              start_date: 1453276800000,
              end_date: 1453276800000,
              start_time: 15,
              end_time: 22,
              description: " A great opportunity to meet winemakers, taste limited production wines, new releases or library wines and save with a weekend of special offers.  All wineries will be offering savings on select wines, select food products, logo items, giftware of shipping discounts.  Some wineries will offer food pairings and others may have tours.  By mid-December 2015 you will be able to download the detailed program to see exactly what each winery will offer for the weekend.....then plan your tasting adventure.
Ticket price will include wine tasting at all of the participating wineries for the weekend.
Attendees will receive a tasting glass & wristband upon check-in.
*Designated Drivers are given a different color wristband and they are not served wine

This year we will also be having a Winemaker Breakfast and Q & A on Saturday January 16th from 9am - 10:30am at 2 different locations. To buy your ticket to one of our Winemaker Breakfast locations CLICK HERE

This event does not take place at one location, you travel from winery to winery, visiting the ones you are interested in exploring.
PRINT IT OR SHOW IT – Your PDF ticket when registering at your chosen starting winery
You are required to select just your starting winery, then are welcome to visit any & all of the wineries that are participating in this year’s event throughout the weekend.
Each participating winery is limited to 50 check-in registrations. When a winery has sold out as a check in location their name is “greyed out” on the list and will not be able to accept any more check ins
Wineries with an * next to their name have requested no groups of 8 or more and no limos
Event takes place Rain or Shine",
              ticket_max: 2000,
              price: 10.00,
              view_count: rand(40000..70000),
              url: "/v1450654177/photo-1444728399417-08d2aa39e6f4_j9wdgt.jpg",
              category: "Food & Drink",
              lat: 38.688369,
              lng: -122.824786,
              organizer_id: 5
        )


Event.create!(title: "Whiskies of the World",
              location: "Pier 3  San Francisco, CA 94109",
              start_date: 1453276800000,
              end_date: 1453276800000,
              start_time: 12,
              end_time: 22,
              description: "Whiskies of the World® Expo brings together distillers from around the world to share their finest spirits and knowledge with whisky enthusiasts.  Discover the Art of Whisky in the company of connoisseurs and whisky celebrities.
•Hundreds of whiskies to sample (Scotch, Bourbon, American Craft, Malts, Grains, …)
•Scottish, Irish, American, Canadian, Indian, Australian ...
•Meet Distillers and Brand Ambassadors
•Dinner buffet
•Whisky Masterclasses: A guided tasting and educational experience.
•Whisky mixology
•Cigar and Whisky pairing
Please note attendance at this event is limited to persons aged 21 or older. Photo I.D. showing age is required.",
              ticket_max: 2400,
              price: 58.50,
              view_count: rand(20000..70000),
              url: "/v1450654167/EOZpjI3oSqKPNnF2S4Tp_Untitled_tmjk3c.jpg",
              category: "Food & Drink",
              lat: 37.799955,
              lng: -122.397993,
              organizer_id: 6
        )

Event.create!(title: "Mixologi",
              location: "555 Golden Gate Avenue, San Francisco, CA 94102",
              start_date: 1455523200000,
              end_date: 1455609600000,
              start_time: 22,
              end_time: 4,
              description: "VERY LIMITED EARLY BIRD TICKETS AVAILABLE NOW.

Mixologi is closing out the year by bringing together those special folks who have rocked with us all year.

We are taking over the brand new Empire Room, San Francisco's new creative nightlife environment.
We have a huge dance floor, a separate cocktail bar room in addition to the main bar, and some of the dopest DJs playing nothing but the best throughout the course of the night.

Interested in bottle service for this event? Contact jane@mixologi.com.",
              ticket_max: 2400,
              price: 65.0,
              view_count: rand(20000..70000),
              url: "/v1450654175/photo-1428992992979-aaeb02b6960c_trmija.jpg",
              category: "Nightlife",
              lat: 37.780979,
              lng: -122.419607,
              organizer_id: 6
        )

Event.create!(title: "Run the Road to Super Bowl 50 - 10K and 5K Run",
              location: "4900 Marie P. DeBartolo Way, Santa Clara, CA 95054",
              start_date: 1453968000000,
              end_date: 1453968000000,
              start_time: 12,
              end_time: 16,
              description: "Be a part of history and join in the celebration of the 50th Super Bowl!
Join the action by running a 10K, 5K or the Kids Fun Run and finish inside Levi's Stadium, the very same field that will host the Golden 50 Super Bowl. Interact with heroes of past and make memories for the future as you join in the fun running the road to Super Bowl 50. This is your chance to make your own history and be among the first to kick off the excitement in the City of Santa Clara as the Bay Area hosts Super Bowl 50. Check out the website HERE.




Have questions about Run the Road to Super Bowl 50 - 10K and 5K Run? Contact Easy Day Sports",
              ticket_max: 2400,
              price: 21.00,
              view_count: rand(20000..70000),
              url: "/v1450644800/photo-1432753759888-b30b2bdac995_sjedwh.jpg",
              category: "Sports & Fitness",
              lat: 37.403154,
              lng: -121.969836,
              organizer_id: 7
        )


Event.create!(title: "Republic FC Winter Holiday Camp",
              location: "4500 Pell Dr, Sacramento, CA 95838",
              start_date: 1458457200000,
              end_date: 1458716400000,
              start_time: 12,
              end_time: 17,
              description: "Every camp is designed to provide athletes with an opportunity to develop skill level and acquire technical and tactical knowledge of the sport in a professional and fun environment. Athletes will be exposed to various exercises and strategies, helping to improve awareness in general skills. The camp will cover passing, dribbling, and shooting drills, to include 1v1, 2v2, and group play exercises.

The three day camp is co-ed and is designed for athletes within the 6-14 year old age range, although all skill levels and positions are welcome. Every athlete will receive a t-shirt on the first day of camp. Participants are asked to arrive at least 15 minutes prior to start time for check-in the first day of camp.

Equipment: Republic FC asks all registered camp participants to bring appropriate cleats and sporting
attire, including shin guards and a soccer ball. BODYARMOR Sports Drink will be provided but please bring your own water. No Cleats: Players will be on multiple surfaces throughout the camp.  Please wear comfortable tennis shoes, athletic sneakers, or indoor soccer/turf shoes.

Please bring your own water.",
              ticket_max: 30400,
              price: 315.00,
              view_count: rand(20000..70000),
              url: "/v1450654176/photo-1431324155629-1a6deb1dec8d_vdtuli.jpg",
              category: "Sports & Fitness",
              lat: 38.649099,
              lng: -121.470393,
              organizer_id: 7
              )


Event.create!(title: "Date Night: Ice Cream Social",
              location: "271 Francisco Street, San Francisco, CA 94133",
              start_date: 1458457200000,
              end_date: 1458716400000,
              start_time: 14,
              end_time: 17,
              description: "Ever dreamed of exploring the exotic ingredients and prepared foods of the night markets in Marrakech? The colors and aromas will draw you in and Parties That Cook will take you on a culinary tour of the “Red City” in this hands-on cooking class. You’ll learn how to preserve your own lemons (Meyers are perfect for preserving and abundant in the Bay Area), which by the way make a great gift for your foodie friends and family. We’ll prepare a few Moroccan appetizers - wonderful starters to whet your appetite for the main events - Six-Vegetable Couscous and a fork-tender Moroccan Chicken Tagine with Honeyed Prunes. After a big meal we’ll cool down with a Cardamom Orange Upside-Down Cake with Spice Ice Cream. This is a feast for all of the senses!",
              ticket_max: 30400,
              price: 15.00,
              view_count: rand(20000..70000),
              url: "/v1450654175/photo-1422246478030-ac94dfdc1dae_lfcix6.jpg",
              category: "Food & Drink",
              lat: 37.804996,
              lng: -122.409662,
              organizer_id: 8
              )



Event.create!(title: "FOG Design+Art Preview Gala",
              location: "Fort Mason Center, 2 Marina Blvd San, Francisco, CA 94123",
              start_date: 1454918400000,
              end_date: 1454918400000,
              start_time: 16,
              end_time: 23,
              description: "Kick off the annual FOG Design+Art Fair in style at the FOG Preview Gala. Enjoy exclusive early access to the fair’s vast range of exquisite furniture, fine art, and design objects before it opens to the public. Stay for a festive evening of live entertainment, culinary creations by McCalls, and design-centric cocktails.

Platinum, Gold, Silver, and Bronze Circle ticketholders receive early entry. Please refer to your ticket for more details.

All proceeds from the FOG Design+Art Preview Gala will benefit the San Francisco Museum of Modern Art’s California-wide exhibitions and education programs, which serve more than 60,000 students, teachers, and families each year.",

              ticket_max: 30400,
              price: 5.99,
              view_count: rand(20000..70000),
              url: "/v1450654175/photo-1422246358533-95dcd3d48961_j8x6sy.jpg",
              category: "Art",
              lat: 37.806789,
              lng: -122.431507,
              organizer_id: 8
              )

Event.create!(title: "Welcome to Lyfecoach",
              location: "1400 Market Street, San Francisco, CA 94102",
              start_date: 1451635200000,
              end_date: 1472713200000,
              start_time: 16,
              end_time: 23,
              description: "Welcome to Lyfecoach.",
              ticket_max: 30400,
              price: 5.00,
              view_count: 100000,
              url: "/v1451174219/photo-1430651717504-ebb9e3e6795e_bjgflk.jpg",
              category: "Nightlife",
              lat: 37.776368,
              lng: -122.418169,
              organizer_id: 9
              )
