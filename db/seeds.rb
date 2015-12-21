# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

event_type = ["Cuisine", "Arts", "Music", "Nightlife", "Sports & Fitness"]

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
             url: "/v1450658256/16034121_zjlywr.jpg")

User.create!(email: "1015folsom@gmail.com",
             first_name: "1015",
             last_name: "Folsom",
             host_name: "1015 Folsom",
             description: "San Francisco is home to one of the most vibrant nightlife scenes in North America and sitting right at the heart of it is 1015 Folsom. Since 1986, 1015 has been home to some of the most notable events in the Bay Area. From long running legendary weeklies like Release, Nikita and Spundae to annual events like the Get Freaky Afterburn and Gus Presents massives, this 2000 person venue has always been one of the IT spots in a city filled with options.

The vast 20,000 square foot space, which houses 5 separate rooms, each with full bars and DJ booths, allows for parties of virtually every size and scale. The modern decor boasts only the finest finishes, featuring Brazilian hardwood dance floors, sterling silver tiles and cracked glass bar tops. Spectacular design features abound including a 400 square foot water-wall with video display capacities, a custom color changing room, and a dramatic 40 tall tastefully appointed Moroccan mezzanine.

Housing the city’s most advanced and powerful lighting and sound systems, the club technological effects are legendary. Generating over 150,000 watts of premium sound, the clubs precisely engineered sound environments provide the perfect showcase for both live and DJ entertainment.",
             password: "password123",
             url: "/v1450654179/photo-1446071103084-c257b5f70672_k3ipzm.jpg")

 User.create!(email: "rubyskye@gmail.com",
              first_name: "Ruby",
              last_name: "Skye",
              host_name: "Ruby Skye",
              description: "Ruby Skye is San Francisco's premiere Nightclub and Special Event Venue. It is conveniently located in the heart of downtown SF just off of Union Square and the famed theatre district. Whether you're a seasoned club enthusiast, looking to go out for a memorable evening, or wish to host a private event, Ruby Skye is available for all your entertaining needs.

Ruby Skye's exquisitely appointed facility was built in the 1890's and is a historical landmark that formerly housed - Stage Door Theatre. A turn of the century victorian playhouse restored with all the high tech accoutrement, Ruby Skye's interiors were designed by Pamela Pennington Studios and present a striking juxtaposition between its original Art Nouveau architecture and its plush modern furnishings.

This impeccably appointed space is perfect setting for launch parties, wedding and receptions, benefits and fashion shows. The possibilities are endless for entertaining in this unique, and upscale entertainment venue.

Ruby Skye is in a class all by itself, innovative menu choices and our attention to detail at every level.",
              password: "password123",
              url: "/v1450654168/dpzDUkJrTHb71Yla1EzF_IMG_4098_qzifm7.jpg")


Event.create!(title: "Big Boi (DJ Set) with Special Guest Falcons",
              location: "1015 Folsom St, San Francisco, CA 94103",
              start_date: 1421913500000,
              end_date: 1422000000000,
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
              start_date: 1422518400000,
              end_date: 1422604700000,
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
              start_date: 1423727000000,
              end_date: 1423814400000,
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
              start_date: 1426834700000,
              end_date: 1426921200000,
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
              start_date: 1422518400000,
              end_date: 1422604800000,
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
              start_date: 1421222400000,
              end_date: 1421308700000,
              start_time: 21,
              end_time: 2,
              description: "EPHWURD [SF DEBUT] & AUTOEROTIQUE Ruby Skye Thursday, January 14, 2016 at 9:00 PM (PST) San Francisco, CA",
              ticket_max: 1000,
              price: 14.99,
              view_count: rand(1000..100000),
              url: "/v1450654167/01-15-16_Awakening_Ephwurd_450x8002_spesxh.jpg",
              category: "Music",
              lat: 37.787566,
              lng: -122.409595,
              organizer_id: 3
        )

Event.create!(title: "Ruby Skye Presents HOOK N SLING & ELEPHANTE",
              location: "420 Mason St, San Francisco, CA 94109",
              start_date: 1421913500000,
              end_date: 1422000000000,
              start_time: 22,
              end_time: 4,
              description: "Ruby Skye Presents
HOOK N SLING & ELEPHANTE
FRIDAY, JANUARY 22
BUY TICKETS NOW
",
              ticket_max: 1000,
              price: 19.99,
              view_count: rand(1000..100000),
              url: "/v1450657532/03124_pj9fpe.jpg",
              category: "Music",
              lat: 37.787566,
              lng: -122.409595,
              organizer_id: 3
        )



# 40.times do |index|
#   variancelat = rand(0..0.05) * 2 - 0.05
#   variancelng = rand(0..0.05) * 2 - 0.05
#   lat_coordinate = 37.7758 + variancelat
#   lng_coordinate = -122.435 + variancelng
#
#   Event.create!(title: "#{Faker::Book.title} #{index}",
#                location: Faker::Address.street_address,
#                start_date: Time.now.to_i*1000 + rand(0..2.68 * 10**9),
#                end_date: Time.now.to_i*1000 + rand(2.68 * 10**9 .. 2.68 * 10**10),
#                start_time: rand(0..10),
#                end_time: rand(11..23),
#                description: Faker::Lorem.paragraph,
#                ticket_max: rand(100..10000),
#                price: rand(10..100),
#                view_count: rand(1000..100000),
#                url: Faker::Avatar.image,
#                category: event_type[rand(0...event_type.length)],
#                lat: lat_coordinate,
#                lng: lng_coordinate,
#                organizer_id: rand(1..2))
#
# end
