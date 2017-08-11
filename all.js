// 1 gigameter == 1*10^-6 km

[
  {
    "name": "Milky Way Galaxy",
    "radiusLightYears": 50000,
    "type": "barred spiral galaxy",
    // https://www.space.com/19915-milky-way-galaxy.html
    "contents": [
      {
        "name": "The Solar System",
        "radiusGigaMeter": 4545,
        // https://www.universetoday.com/15585/diameter-of-the-solar-system/
        "contents": {

          "star": {
            "name": "Sol",
            "outerTemperatureCelcius": 6000,
            "innerTemperatureCelcius": 15000000,
            // http://solarviews.com/eng/sun.htm
            // https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html
          },

          "planets": [
            {
              "name": "Mercury",
              "description": "Sun-scorched Mercury, the smallest planet in our solar system, is only slightly larger than Earth's moon. Like the moon, Mercury has very little atmosphere to stop impacts and it is covered with craters. Mercury's dayside is super-heated by the sun, but at night temperatures drop hundreds of degrees below freezing. Ice may even exist in craters.",
              "dayHrs": 4222.6,
              "sunDistanceGigaMeter": 43.4,
              "radiusKm": 2439.7,
              "satellites": [],
              "temperatureCelsius": 167,
              "atmospherePercentage": {
                "carbon_dioxide": 96,
                "nitrogen": 4,
              },
              // https://www.nasa.gov/planetmercury
              // https://spacemath.gsfc.nasa.gov/astrob/10Page7.pdf
              // https://nssdc.gsfc.nasa.gov/planetary/factsheet/mercuryfact.html
              // https://www.nasa.gov/planetmercury
            },

            {
              "name": "Venus",
              "description": "Venus is a dim world of intense heat and volcanic activity. Similar in structure and size to Earth, Venus' thick, toxic atmosphere traps heat in a runaway 'greenhouse effect.' The scorched world has temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains. Venus spins slowly in the opposite direction of most planets.",
              "dayHrs": 2802,
              "sunDistanceGigaMeter": 108.2,
              "radiusKm": 6051.8,
              "satellites": [],
              "temperatureCelsius": 464,
              "atmospherePercentage": {
                "oxygen": 42,
                "sodium": 22,
                "hydrogen": 22,
                "helium": 6,
                "other": 8,
              },
              // https://www.nasa.gov/venus
              // https://spacemath.gsfc.nasa.gov/astrob/10Page7.pdf
              // https://nssdc.gsfc.nasa.gov/planetary/factsheet/venusfact.html
              // http://coolcosmos.ipac.caltech.edu/ask/51-How-far-is-Venus-from-the-Sun-
            },

            {
              "name": "Earth",
              "description": "Earth is the third planet from the sun and the fifth largest in the solar system. Just slightly larger than nearby Venus, Earth is the biggest of the terrestrial planets. Our home planet is the only planet in our solar system known to harbor living things. The name Earth is at least 1,000 years old. The name Earth is an English/German word, which simply means the ground.",
              "dayHrs": 24,
              "sunDistanceGigaMeter": 150,
              "radiusKm": 6378.1,
              "satellites": [
                {"name": "Moon"}
              ],
              "temperatureCelsius": 16,
              "atmospherePercentage": {
                "nitrogen": 78,
                "oxygen": 21,
                "argon": 1,
              },
              // https://solarsystem.nasa.gov/planets/earth
              // https://spacemath.gsfc.nasa.gov/astrob/10Page7.pdf
              // https://www.space.com/17816-earth-temperature.html
              // https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html
              // https://www.space.com/17733-earth-sun-distance-astronomical-unit.html
            },

            {
              "name": "Mars",
              "description": "Mars is a planet. It is the fourth planet from the sun. It is the next planet beyond Earth. Mars is more than 142 million miles from the sun. The planet is about one-sixth the size of Earth. Mars is known as the Red Planet. It gets its red color from the iron in its soil. Mars has two small moons. Their names are Phobos and Deimos. Mars is very cold. The average temperature on Mars is minus 80 degrees Fahrenheit -- way below freezing! Mars is rocky with canyons, volcanoes and craters all over it. Red dust covers almost all of Mars. It has clouds and wind, just as Earth does. Sometimes the wind blows the red dust into a dust storm. Tiny dust storms can look like tornados, and large ones can cover the whole planet!, Mars has about one-third the gravity of Earth. A rock dropped on Mars would fall slower than a rock dropped on Earth. Things weigh less on Mars than they weigh on Earth. A person who weighs 100 pounds on Earth would only weigh about 37 pounds on Mars because of less gravity.",
              "dayHrs": 24.6597,
              "sunDistanceGigaMeter": 227.94,
              "radiusKm": 3396.2,
              "satellites": [
                {"name": "Phobos"},
                {"name": "Deimos"},
              ],
              "temperatureCelsius": -63,
              "atmospherePercentage": {
                "carbon_dioxide": 95,
                "nitrogen": 2.7,
                "argon": 1.6,
                "other": 0.7,
              },
              // https://www.nasa.gov/audience/forstudents/k-4/stories/nasa-knows/what-is-mars-k4.html
              // https://spacemath.gsfc.nasa.gov/astrob/10Page7.pdf
              // https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html
              // https://www.nasa.gov/audience/foreducators/k-4/features/F_Measuring_the_Distance_Student_Pages.html
            },

            {
              "name": "Jupiter",
              "description": "Jupiter is the largest planet in the solar system. It is approximately 143,000 kilometers (about 89,000 miles) wide at its equator. Jupiter is so large that all of the other planets in the solar system could fit inside it. More than 1,300 Earths would fit inside Jupiter. Jupiter is like a star in composition. If Jupiter had been about 80 times more massive, it would have become a star rather than a planet. Jupiter is the fifth planet from the sun. Jupiter's average distance from the sun is 5.2 astronomical units, or AU. This distance is a little more than five times the distance from Earth to the sun. When viewed from Earth, Jupiter is usually the second brightest planet in the night sky, after Venus. The planet is named after Jupiter, the king of the Roman gods in mythology.",
              "dayHrs": 9.9259,
              "sunDistanceGigaMeter": 741,
              "radiusKm": 71492,
              "satellites": [
                {"name": "Adrastea"},
                {"name": "Aitne"},
                {"name": "Amalthea"},
                {"name": "Ananke"},
                {"name": "Aoede"},
                {"name": "Arche"},
                {"name": "Autonoe"},
                {"name": "Callirrhoe"},
                {"name": "Callisto"},
                {"name": "Carme"},
                {"name": "Carpo"},
                {"name": "Chaldene"},
                {"name": "Cyllene"},
                {"name": "Dia"},
                {"name": "Elara"},
                {"name": "Erinome"},
                {"name": "Eukelade"},
                {"name": "Euanthe"},
                {"name": "Euporie"},
                {"name": "Europa"},
                {"name": "Eurydome"},
                {"name": "Ganymede"},
                {"name": "Harpalyke"},
                {"name": "Hegemone"},
                {"name": "Helike"},
                {"name": "Hermippe"},
                {"name": "Herse"},
                {"name": "Himalia"},
                {"name": "Io"},
                {"name": "Iocaste"},
                {"name": "Isonoe"},
                {"name": "Jupiter LI"},
                {"name": "Jupiter LII"},
                {"name": "Kale"},
                {"name": "Kallichore"},
                {"name": "Kalyke"},
                {"name": "Kore"},
                {"name": "Leda"},
                {"name": "Lysithea"},
                {"name": "Megaclite"},
                {"name": "Metis"},
                {"name": "Mneme"},
                {"name": "Orthosie"},
                {"name": "Pasiphae"},
                {"name": "Pasithee"},
                {"name": "Praxidike"},
                {"name": "Sinope"},
                {"name": "Sponde"},
                {"name": "Thebe"},
                {"name": "Themisto"},
                {"name": "Taygete"},
                {"name": "Thelxino"},
                {"name": "S/2017 J 1"},
              ],
              "temperatureCelsius": -161,
              "atmospherePercentage": {
                "hydrogen": 89.8,
                "helium": 10.2,
              },
              // https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-jupiter-58.html
              // https://solarsystem.nasa.gov/planets/jupiter/moons
              // https://spacemath.gsfc.nasa.gov/astrob/10Page7.pdf
              // https://nssdc.gsfc.nasa.gov/planetary/factsheet/jupiterfact.html
              // https://www.space.com/18383-how-far-away-is-jupiter.html
            },

            {
              "name": "Saturn",
              "description": "The second largest planet in our solar system, adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings -- made of chunks of ice and rock -- but none are as spectacular or as complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball of mostly hydrogen and helium. Surrounding by 53 confirmed and nine provisional moons, Saturn is home to some of the most fascinating landscapes in our solar system. From the jets of Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries. The farthest planet from Earth observable by the unaided human eye, Saturn has been known since ancient times and is named for the Roman god of agriculture and wealth. The Greek equivalent was Cronos, the father of Zeus/Jupiter.",
              "dayHrs": 10.656,
              "sunDistanceGigaMeter": 1200,
              "radiusKm": 60268,
              "satellites": [
                {"name": "Aegaeon"},
                {"name": "Aegir"},
                {"name": "Albiorix"},
                {"name": "Anthe"},
                {"name": "Atlas"},
                {"name": "Bebhionn"},
                {"name": "Bergelmir"},
                {"name": "Bestla"},
                {"name": "Calypso"},
                {"name": "Daphnis"},
                {"name": "Dione"},
                {"name": "Enceladus"},
                {"name": "Epimetheus"},
                {"name": "Erriapus"},
                {"name": "Farbauti"},
                {"name": "Fenrir"},
                {"name": "Fornjot"},
                {"name": "Greip"},
                {"name": "Hati"},
                {"name": "Helene"},
                {"name": "Hyperion"},
                {"name": "Hyrrokkin"},
                {"name": "Iapetus"},
                {"name": "Ijiraq"},
                {"name": "Janus"},
                {"name": "Jarnsaxa"},
                {"name": "Kari"},
                {"name": "Kiviuq"},
                {"name": "Loge"},
                {"name": "Methone"},
                {"name": "Mimas"},
                {"name": "Mundilfari"},
                {"name": "Narvi"},
                {"name": "Paaliaq"},
                {"name": "Pallene"},
                {"name": "Pan"},
                {"name": "Pandora"},
                {"name": "Phoebe"},
                {"name": "Polydeuces"},
                {"name": "Prometheus"},
                {"name": "Rhea"},
                {"name": "Siarnaq"},
                {"name": "Skathi"},
                {"name": "Skoll"},
                {"name": "Surtur"},
                {"name": "Suttungr"},
                {"name": "Tarqeq"},
                {"name": "Tarvos"},
                {"name": "Telesto"},
                {"name": "Tethys"},
                {"name": "Thrymr"},
                {"name": "Titan"},
                {"name": "Ymir"},
              ],
              "temperatureCelsius": -178,
              "atmospherePercentage": {
                "hydrogen": 96.3,
                "helium": 3.2,
                "other": 0.5,
              },
              // https://www.space.com/18473-saturn-temperature.html
              // https://solarsystem.nasa.gov/planets/saturn/moons
              // https://nssdc.gsfc.nasa.gov/planetary/factsheet/saturnfact.html
              // https://www.space.com/18477-how-far-away-is-saturn.html
              // https://solarsystem.nasa.gov/planets/saturn
            },

            {
              "name": "Uranus",
              "description": "",
              "dayHrs": 17.24,
              "sunDistanceGigaMeter": 2500,
              "radiusKm": 25559,
              "satellites": [
                {"name": "Cordelia"},
                {"name": "Ophelia"},
                {"name": "Bianca"},
                {"name": "Cressida"},
                {"name": "Desdemona"},
                {"name": "Juliet"},
                {"name": "Portia"},
                {"name": "Rosalind"},
                {"name": "Mab"},
                {"name": "Belinda"},
                {"name": "Perdita"},
                {"name": "Puck"},
                {"name": "Cupid"},
                {"name": "Miranda"},
                {"name": "Francisco"},
                {"name": "Ariel"},
                {"name": "Umbriel"},
                {"name": "Titania"},
                {"name": "Oberon"},
                {"name": "Caliban"},
                {"name": "Stephano"},
                {"name": "Trinculo"},
                {"name": "Sycorax"},
                {"name": "Margaret"},
                {"name": "Prospero"},
                {"name": "Setebos"},
                {"name": "Ferdinand"},
              ],
              "temperatureCelsius": -224,
              "atmospherePercentage": {
                "methane": 2.3,
                "hydrogen": 82.5,
                "helium": 15.2,
              },
              // http://www.nationalgeographic.com/science/space/solar-system/uranus/
              // https://nssdc.gsfc.nasa.gov/planetary/factsheet/uranusfact.html
              // https://solarsystem.nasa.gov/planets/uranus/moons
              // https://www.space.com/18709-uranus-distance.html
            },

            {
              "name": "Neptune",
              "dayHrs": 16.11,
              "sunDistanceGigaMeter": 4300,
              "radiusKm": 24764,
              "satellites": [
                {"name": "Naiad"},
                {"name": "Thalassa"},
                {"name": "Despina"},
                {"name": "Galatea"},
                {"name": "Larissa"},
                {"name": "S/2004 N 1"},
                {"name": "Proteus"},
                {"name": "Triton"},
                {"name": "Nereid"},
                {"name": "Halimede"},
                {"name": "Sao"},
                {"name": "Laomedeia"},
                {"name": "Psamathe"},
                {"name": "Neso"},
              ],
              "temperatureCelsius": -214 ,
              "atmospherePercentage": {
                "methane": 1,
                "hydrogen": 80,
                "helium": 19,
              },
              // http://coolcosmos.ipac.caltech.edu/ask/150-What-is-the-weather-like-on-Neptune-
              // http://www.whillyard.com/science-pages/our-solar-system/neptunes-moons.html
              // https://nssdc.gsfc.nasa.gov/planetary/factsheet/neptunefact.html
              // https://www.space.com/18923-neptune-distance.html
            },

          ],

          "ateroids": [
            {
              "name": "Vesta",
              "description": "Vesta is the second most massive body in the asteroid belt, surpassed only by Ceres, which is classified as a dwarf planet. The brightest asteroid in the sky, Vesta is occasionally visible from Earth with the naked eye. It is the first asteroid to be visited by a spacecraft. The Dawn mission orbited Vesta in 2011, providing new insights into this rocky world.",
              "radiusKm": 265,
              "orbital_period_yrs": 3.63,
              // https://www.nasa.gov/mission_pages/dawn/ceresvesta/index.html
              // https://www.space.com/12097-vesta-asteroid-facts-solar-system.html
            },
            {
              "name": "433 Eros",
              "description": "433 Eros is an S-type near-Earth asteroid approximately 34.4×11.2×11.2 kilometres in size, the second-largest near-Earth asteroid after 1036 Ganymed. It was discovered in 1898 and was the first near-Earth asteroid discovered. It was the first asteroid orbited by an Earth probe (in 2000). It belongs to the Amor group. Eros is a Mars-crosser asteroid, the first known to come within the orbit of Mars. Objects in such an orbit can remain there for only a few hundred million years before the orbit is perturbed by gravitational interactions. Dynamical integrations suggest that Eros may evolve into an Earth-crosser within as short an interval as two million years, and has a roughly 50% chance of doing so over a time scale of 108–109 years. It is a potential Earth impactor,[5] about five times larger than the impactor that created Chicxulub crater and led to the extinction of the dinosaurs.",
              "radiusKm": 16.84,
              "orbital_period_yrs": 1.76,
              // http://nineplanets.org/eros.html
              // http://www.erosproject.com/erosfact.html?source=ErosProject
            },
            {
              "name": "1036 Ganymed",
              "description": "1036 Ganymed is the largest near-Earth asteroid, at about 32–34 km in diameter. It was discovered by Walter Baade on October 23, 1924. It has a very well determined orbit, and its next pass of the Earth will be at a distance 55,964,100 km on 13 October 2024. It is an Amor asteroid, and also a Mars-crosser asteroid, and will pass 4,290,000 km from Mars on 16 December 2176.",
              "radiusKm": 18.84,
              "orbital_period_yrs": 4.345,
              // https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=1036+Ganymed
            },
          ],

          "manMade": [
            {
              "name": "Chang'e 5-T1",
              "description": "Chang'e 5-T1 (Chinese: 嫦娥五号T1) is an experimental unmanned lunar mission that was launched on 23 October 2014 by the China National Space Administration (CNSA) to conduct atmospheric re-entry tests on the capsule design planned to be used in the Chang'e 5 mission. As the final part of the Chinese Lunar Exploration Program, Chang'e 5, scheduled for 2017, will be a Moon sample return mission. Like its predecessors, the spacecraft is named after the Chinese Moon goddess Chang'e.",
              "location": "Moon",
              "launchDate": "2014-10-23",
              "organisation": "CNSA"
              // https://en.wikipedia.org/wiki/Chang%27e_5-T1
            },
            {
              "name": "ARTEMIS P2",
              "description": "The mission ARTEMIS is made up of two probes P1 and P2. They were originally members of the successful Earth-orbiting THEMIS mission (studying Earth's aurora), but were redirected to the moon. Through this new mission scientists learn more about the Earth-moon Lagrange points, the solar wind, the Moon's plasma wake and how the Earth's magnetotail and the moon's own weak magnetism interact with the solar wind.",
              "location": "Moon",
              "launchData": "2007-02-17",
              "organisation": "NASA"
              // https://solarsystem.nasa.gov/missions/artemis
            },
            {
              "name": "Akatsuki",
              "description": "The Venus Climate Orbiter mission (PLANET-C), or Akatsuki, is studying the atmospheric circulation of Venus. Meteorological information will be obtained by globally mapping clouds and minor constituents successively with four cameras at ultraviolet and infrared wavelengths, detecting lightning with a high-speed imager, and observing the vertical structure of the atmosphere with radio science techniques.",
              "location": "Venus",
              "launchData": "2010-05-10",
              "organisation": "JAXA"
              // https://en.wikipedia.org/wiki/Akatsuki_(spacecraft)
              // https://solarsystem.nasa.gov/missions/akatsuki/indepth
            },
            {
              "name": "Curiosity",
              "description": "Curiosity is a car-sized rover designed for exploring Gale Crater on Mars as part of NASA's Mars Science Laboratory mission (MSL).[3] Curiosity was launched from Cape Canaveral on November 26, 2011, at 15:02 UTC aboard the MSL spacecraft and landed on Aeolis Palus in Gale Crater on Mars on August 6, 2012. The rover's goals include: investigation of the Martian climate and geology; assessment of whether the selected field site inside Gale Crater has ever offered environmental conditions favorable for microbial life, including investigation of the role of water; and planetary habitability studies in preparation for future human exploration.",
              "location": "Mars",
              "launchData": "2011-11-26",
              "organisation": "NASA"
              // https://en.wikipedia.org/wiki/Curiosity_(rover)
            },
            {
              "name": "Dawn",
              "description": "Dawn is a space probe launched by NASA in September 2007 with the mission of studying two of the three known protoplanets of the asteroid belt, Vesta and Ceres. It is currently in orbit about its second target, the dwarf planet Ceres. Dawn is the first spacecraft to orbit two extraterrestrial bodies,[6] the first spacecraft to visit either Vesta or Ceres, and also the first to visit a dwarf planet, arriving at Ceres in March 2015, a few months before New Horizons flew by Pluto in July 2015.",
              "location": "Vesta",
              "launchData": "2007-09-27",
              "organisation": "NASA"
              // https://en.wikipedia.org/wiki/Dawn_(spacecraft)
            },
            {
              "name": "Voyager 1",
              "description": "Voyager 1 is currently the farthest man-made object from Earth, as well as the first object to leave the Solar System and cross into interstellar space. As of September 2014 it lies about 129 astronomical units (AU) from the sun[5][6] (19.3 billion kilometers, or 0.002 light years), and it will not be overtaken by any other current craft. It was originally tasked with investigating Jupiter and Saturn, and the moons of these planets. Its continuing data feed offered the first direct measurements of the heliosheath and the heliopause. In August 2012, Voyager 1 became the first human built spacecraft to enter interstellar space. It is hoped that Voyager 1 will continue operating until at least 2020.",
              "location": "Interstellar Space",
              "launchData": "1977-09-05",
              "organisation": "NASA"
              // https://en.wikipedia.org/wiki/Dawn_(spacecraft)
            },
            {
              "name": "Voyager 1",
              "description": "Voyager 1 is currently the farthest man-made object from Earth, as well as the first object to leave the Solar System and cross into interstellar space. As of September 2014 it lies about 129 astronomical units (AU) from the sun[5][6] (19.3 billion kilometers, or 0.002 light years), and it will not be overtaken by any other current craft. It was originally tasked with investigating Jupiter and Saturn, and the moons of these planets. Its continuing data feed offered the first direct measurements of the heliosheath and the heliopause. In August 2012, Voyager 1 became the first human built spacecraft to enter interstellar space. It is hoped that Voyager 1 will continue operating until at least 2020.",
              "location": "Interstellar Space",
              "launchData": "1977-09-05",
              "organisation": "NASA"
              // https://en.wikipedia.org/wiki/Voyager_1
            },
            {
              "name": "ICE",
              "description": "The International Cometary Explorer (ICE) spacecraft was launched into a heliocentric orbit. It was one of three spacecraft, along with the mother/daughter pair of ISEE-1 and ISEE-2, built for the International Sun-Earth Explorer (ISEE) program, a joint effort by NASA and ESRO/ESA to study the interaction between the Earth's magnetic field and the solar wind. ISEE-3 was the first spacecraft to be placed in a halo orbit at the L1 Earth-Sun Lagrangian point. Renamed ICE, it became the first spacecraft to visit a comet, passing through the plasma tail of comet Giacobini-Zinner within about 7,800 km (4,800 mi) of the nucleus on September 11, 1985.",
              "location": "Lost contact",
              "launchData": "1978-08-12",
              "organisation": "NASA"
              // https://en.wikipedia.org/wiki/Voyager_1
            },
          ]
        },
      },
    ],
  },
]
