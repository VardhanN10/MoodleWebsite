// Quiz data for all courses
const quizData = {
    iot: {
        courseName: "Computer Engineering for IoT System",
        questions: [
            {
                id: 1,
                question: "Which communication protocol is specifically designed for IoT devices with limited bandwidth and power?",
                image: null,
                options: [
                    "HTTP",
                    "MQTT",
                    "FTP",
                    "SMTP"
                ],
                correctAnswer: 1,
                explanation: "MQTT (Message Queuing Telemetry Transport) is a lightweight publish-subscribe protocol designed for IoT devices with constrained resources. It uses minimal bandwidth and power, making it ideal for remote sensors and embedded systems."
            },
            {
                id: 2,
                question: "What is the primary difference between Arduino and Raspberry Pi?",
                image: "images/iot/arduino-vs-raspberry.jpg",
                options: [
                    "Arduino is a microcontroller, Raspberry Pi is a microprocessor/computer",
                    "Arduino runs Linux, Raspberry Pi doesn't",
                    "Raspberry Pi cannot connect to sensors",
                    "Arduino has more processing power"
                ],
                correctAnswer: 0,
                explanation: "Arduino is a microcontroller board that executes code directly without an operating system, ideal for interfacing with sensors. Raspberry Pi is a full computer running Linux with more processing power but higher overhead."
            },
            {
                id: 3,
                question: "In Germany, which bin/bag should you use for plastic packaging and aluminum cans?",
                image: "images/waste/gelber-sack.jpg",
                options: [
                    "Blue bin (Papiertonne)",
                    "Yellow bin/bag (Gelber Sack)",
                    "Brown bin (Biotonne)",
                    "Black bin (Restmüll)"
                ],
                correctAnswer: 1,
                explanation: "The Yellow bin or Gelber Sack is for packaging materials including plastic, soft metals, and composite packaging like Tetra Paks. This is part of Germany's comprehensive recycling system."
            },
            {
                id: 4,
                question: "Which sensor type is commonly used in IoT systems to measure temperature and humidity?",
                image: null,
                options: [
                    "DHT11/DHT22",
                    "PIR sensor",
                    "Ultrasonic sensor",
                    "LDR sensor"
                ],
                correctAnswer: 0,
                explanation: "DHT11 and DHT22 are popular digital temperature and humidity sensors used in IoT projects. They provide calibrated digital output and are easy to interface with microcontrollers like Arduino and ESP32."
            },
            {
                id: 5,
                question: "What does the 'publish-subscribe' pattern in MQTT mean?",
                image: "images/iot/mqtt-pubsub.jpg",
                options: [
                    "Devices directly communicate with each other",
                    "Devices publish messages to topics and subscribe to receive messages from topics",
                    "Only one device can send messages at a time",
                    "Messages are stored permanently on the server"
                ],
                correctAnswer: 1,
                explanation: "In MQTT's publish-subscribe model, devices publish messages to specific topics, and other devices subscribe to those topics to receive the messages. A broker manages the message distribution, decoupling publishers from subscribers."
            },
            {
                id: 6,
                question: "As an international student in Germany, what must you register within 14 days of arrival?",
                image: null,
                options: [
                    "University enrollment only",
                    "Your address at the Bürgeramt (Anmeldung)",
                    "Your passport at the police station",
                    "Your bank account"
                ],
                correctAnswer: 1,
                explanation: "All residents in Germany must register their address at the local Bürgeramt (citizens' office) within 14 days of moving. This registration (Anmeldung) is mandatory and you'll receive a registration certificate needed for many official processes."
            },
            {
                id: 7,
                question: "Which microcontroller is known for having built-in WiFi and Bluetooth capabilities?",
                image: null,
                options: [
                    "Arduino Uno",
                    "ESP32",
                    "ATmega328",
                    "PIC16F877A"
                ],
                correctAnswer: 1,
                explanation: "ESP32 is a popular low-cost microcontroller with integrated WiFi and Bluetooth, making it ideal for IoT applications. It's more powerful than Arduino Uno and includes dual-core processing capabilities."
            },
            {
                id: 8,
                question: "Where should paper and cardboard waste be disposed of in Germany?",
                image: "images/waste/blue-bin.jpg",
                options: [
                    "Yellow bin (Gelbe Tonne)",
                    "Blue bin (Papiertonne)",
                    "Brown bin (Biotonne)",
                    "Black bin (Restmüll)"
                ],
                correctAnswer: 1,
                explanation: "Clean paper and cardboard belong in the Blue bin (Papiertonne/Blaue Tonne). This includes newspapers, magazines, cardboard boxes, and paper packaging. Coated or dirty paper should go in Restmüll."
            },
            {
                id: 9,
                question: "What is the typical operating voltage for most Arduino boards?",
                image: null,
                options: [
                    "3.3V",
                    "5V",
                    "12V",
                    "9V"
                ],
                correctAnswer: 1,
                explanation: "Most Arduino boards (like Arduino Uno, Mega) operate at 5V logic level. However, some newer boards like Arduino Due operate at 3.3V. It's important to match sensor voltage levels to prevent damage."
            },
            {
                id: 10,
                question: "In Germany, where should organic waste like fruit peels and coffee grounds be disposed?",
                image: "images/waste/bio-bin.jpg",
                options: [
                    "Yellow bin",
                    "Blue bin",
                    "Brown or Green bin (Biotonne)",
                    "Glass container"
                ],
                correctAnswer: 2,
                explanation: "Organic/biodegradable waste goes in the Brown or Green bin (Biotonne/Biomüll). This includes food scraps, fruit and vegetable peels, coffee grounds, tea bags, and garden waste. This waste is composted."
            }
        ]
    },
    ert: {
        courseName: "Environmental and Recycling Technology",
        questions: [
            {
                id: 1,
                question: "What is the primary principle of the Circular Economy?",
                image: "images/ert/circular-economy.jpg",
                options: [
                    "Linear production: take, make, dispose",
                    "Keeping resources in use as long as possible, extracting maximum value, then recovering materials",
                    "Using only renewable energy sources",
                    "Reducing consumption to zero"
                ],
                correctAnswer: 1,
                explanation: "The Circular Economy aims to keep resources in use for as long as possible, extract maximum value during use, then recover and regenerate products and materials at the end of their service life, minimizing waste."
            },
            {
                id: 2,
                question: "In Germany's waste separation system, what color is the bin for glass recycling?",
                image: "images/waste/glass-containers.jpg",
                options: [
                    "Yellow only",
                    "Blue for all glass",
                    "Glass is separated by color: clear (white), green, and brown containers",
                    "Black for all glass"
                ],
                correctAnswer: 2,
                explanation: "Glass in Germany must be sorted by color into separate containers: white/clear glass, green glass, and brown glass. These are typically large public containers, not household bins. Proper color separation is crucial for recycling quality."
            },
            {
                id: 3,
                question: "What does LCA stand for in environmental assessment?",
                image: null,
                options: [
                    "Linear Carbon Assessment",
                    "Life Cycle Assessment",
                    "Local Climate Action",
                    "Low Carbon Alternative"
                ],
                correctAnswer: 1,
                explanation: "Life Cycle Assessment (LCA) is a methodology for assessing environmental impacts associated with all stages of a product's life, from raw material extraction through processing, manufacturing, distribution, use, and disposal or recycling."
            },
            {
                id: 4,
                question: "Which waste fraction goes into the Gelber Sack (Yellow Bag) in Germany?",
                image: "images/waste/gelber-sack-detail.jpg",
                options: [
                    "All plastic waste",
                    "Only beverage containers",
                    "Packaging materials with the Green Dot: plastic, metal, composite packaging",
                    "Electronics and batteries"
                ],
                correctAnswer: 2,
                explanation: "The Gelber Sack is specifically for packaging materials marked with the Green Dot (Grüner Punkt), including plastic packaging, aluminum cans, Tetra Paks, and other composite packaging. Not all plastic goes here - only packaging."
            },
            {
                id: 5,
                question: "What is the main environmental benefit of recycling aluminum?",
                image: null,
                options: [
                    "It reduces mining waste only",
                    "It saves up to 95% of the energy required to produce new aluminum",
                    "It prevents air pollution completely",
                    "It creates more jobs"
                ],
                correctAnswer: 1,
                explanation: "Recycling aluminum saves approximately 95% of the energy needed to produce aluminum from raw materials (bauxite ore). This makes aluminum one of the most energy-efficient materials to recycle."
            },
            {
                id: 6,
                question: "As an international student in Germany, health insurance is:",
                image: null,
                options: [
                    "Optional and recommended",
                    "Required only for students over 30",
                    "Mandatory for all students to complete enrollment",
                    "Only needed when visiting a doctor"
                ],
                correctAnswer: 2,
                explanation: "Health insurance is mandatory for all students in Germany. You must show proof of health insurance to complete matriculation (enrollment) and when registering for a residence permit. Without it, you cannot study in Germany."
            },
            {
                id: 7,
                question: "What is the 'Pfand' system in Germany?",
                image: "images/waste/pfand-bottles.jpg",
                options: [
                    "A tax on plastic products",
                    "A deposit-return system for bottles and cans",
                    "A recycling collection service",
                    "A waste separation regulation"
                ],
                correctAnswer: 1,
                explanation: "The Pfand system is a deposit-return scheme where you pay a deposit (typically €0.08-€0.25) on beverage containers, which you get back when returning empty bottles/cans to a collection machine (Pfandautomat) in supermarkets."
            },
            {
                id: 8,
                question: "What goes into the Restmüll (black/gray bin) in Germany?",
                image: "images/waste/restmuell.jpg",
                options: [
                    "All types of waste",
                    "Only food waste",
                    "Residual waste that doesn't fit in other recycling categories",
                    "Only hazardous waste"
                ],
                correctAnswer: 2,
                explanation: "The Restmüll bin is for residual waste that cannot be recycled or composted, such as hygiene products, diapers, cigarette butts, dirty packaging, broken ceramics, and vacuum cleaner bags. This waste typically goes to incineration."
            },
            {
                id: 9,
                question: "What is 'thermal recycling' or waste-to-energy?",
                image: "images/ert/waste-to-energy.jpg",
                options: [
                    "Using waste heat from factories",
                    "Burning waste to generate electricity and heat",
                    "Solar heating of recycling facilities",
                    "Composting to generate methane"
                ],
                correctAnswer: 1,
                explanation: "Thermal recycling (waste-to-energy) involves controlled incineration of waste to generate electricity and district heating. Modern facilities have advanced filters to minimize emissions and recover metals from ash."
            },
            {
                id: 10,
                question: "Where should batteries and electronic waste be disposed of in Germany?",
                image: null,
                options: [
                    "Yellow bin (Gelber Sack)",
                    "Black bin (Restmüll)",
                    "Special collection points at stores, recycling centers, or designated containers",
                    "Blue bin (Papiertonne)"
                ],
                correctAnswer: 2,
                explanation: "Batteries and electronics must be disposed of at special collection points. Stores that sell batteries/electronics must accept them for free. They contain hazardous materials and valuable resources that require specialized recycling."
            }
        ]
    },
    res: {
        courseName: "Renewable Energy System",
        questions: [
            {
                id: 1,
                question: "Which renewable energy source converts sunlight directly into electricity?",
                image: "images/res/solar-panel.jpg",
                options: [
                    "Wind turbine",
                    "Photovoltaic (PV) solar panel",
                    "Hydroelectric dam",
                    "Geothermal plant"
                ],
                correctAnswer: 1,
                explanation: "Photovoltaic (PV) solar panels convert sunlight directly into electricity using semiconductor materials that exhibit the photovoltaic effect, where photons knock electrons free to generate electric current."
            },
            {
                id: 2,
                question: "What is the Betz Limit in wind energy?",
                image: null,
                options: [
                    "The maximum height of a wind turbine",
                    "The theoretical maximum efficiency of 59.3% for extracting energy from wind",
                    "The minimum wind speed needed to generate power",
                    "The maximum number of turbines in a wind farm"
                ],
                correctAnswer: 1,
                explanation: "The Betz Limit states that no wind turbine can convert more than 59.3% (16/27) of the kinetic energy in wind into mechanical energy. This is because some wind must pass through the turbine to maintain airflow."
            },
            {
                id: 3,
                question: "In Germany, which colored bin is used for paper and cardboard recycling?",
                image: "images/waste/blue-bin-detail.jpg",
                options: [
                    "Yellow bin",
                    "Blue bin (Papiertonne)",
                    "Brown bin",
                    "Green bin"
                ],
                correctAnswer: 1,
                explanation: "The Blue bin (Blaue Tonne or Papiertonne) is specifically for paper and cardboard waste in Germany. All clean paper products, including newspapers, cardboard, and paper packaging, should be disposed of here."
            },
            {
                id: 4,
                question: "What is a 'feed-in tariff' in renewable energy systems?",
                image: null,
                options: [
                    "A tax on non-renewable energy",
                    "A guaranteed payment rate for renewable energy fed into the grid",
                    "The cost of connecting to the electrical grid",
                    "A penalty for overproduction"
                ],
                correctAnswer: 1,
                explanation: "A feed-in tariff is a policy mechanism that offers long-term contracts to renewable energy producers, guaranteeing payment for electricity they generate and feed into the grid, encouraging investment in renewable energy."
            },
            {
                id: 5,
                question: "What type of renewable energy uses the Earth's internal heat?",
                image: "images/res/geothermal.jpg",
                options: [
                    "Solar energy",
                    "Biomass energy",
                    "Geothermal energy",
                    "Tidal energy"
                ],
                correctAnswer: 2,
                explanation: "Geothermal energy harnesses heat from beneath the Earth's surface. This heat can be used directly for heating or to generate electricity through geothermal power plants, providing baseload renewable energy."
            },
            {
                id: 6,
                question: "As a student in Germany, what is the Semester Ticket (Semesterticket)?",
                image: null,
                options: [
                    "A discount card for textbooks",
                    "A public transportation pass included in student fees for the semester",
                    "An exam entry ticket",
                    "A library membership card"
                ],
                correctAnswer: 1,
                explanation: "The Semester Ticket is a public transportation pass automatically included in student fees, allowing unlimited travel on buses, trams, and trains within a specified area for the entire semester (typically 6 months)."
            },
            {
                id: 7,
                question: "What is the main advantage of pumped-storage hydroelectricity?",
                image: "images/res/pumped-storage.jpg",
                options: [
                    "It produces more energy than other renewables",
                    "It provides energy storage and grid balancing",
                    "It requires no water",
                    "It works without electricity"
                ],
                correctAnswer: 1,
                explanation: "Pumped-storage hydroelectricity acts as a large battery: water is pumped uphill when electricity is cheap/abundant, then released through turbines when demand is high, providing crucial energy storage and grid stability."
            },
            {
                id: 8,
                question: "Where should broken glass and ceramics be disposed of in Germany?",
                image: null,
                options: [
                    "Glass containers for recycling",
                    "Yellow bin (Gelber Sack)",
                    "Black/Gray bin (Restmüll)",
                    "Blue bin (Papiertonne)"
                ],
                correctAnswer: 2,
                explanation: "Broken glass (especially window glass, drinking glasses) and ceramics cannot be recycled with container glass and must go in the Restmüll (black/gray bin). Only beverage and food container glass goes in glass recycling containers."
            },
            {
                id: 9,
                question: "What is the capacity factor of a power plant?",
                image: null,
                options: [
                    "The maximum power output",
                    "The ratio of actual output to maximum possible output over time",
                    "The number of hours it operates per day",
                    "The efficiency of energy conversion"
                ],
                correctAnswer: 1,
                explanation: "Capacity factor is the ratio of actual energy output over a period to the maximum possible output if the plant ran at full capacity continuously. Solar typically has 15-25%, wind 25-40%, while baseload plants can exceed 90%."
            },
            {
                id: 10,
                question: "What does LCOE stand for in renewable energy economics?",
                image: null,
                options: [
                    "Low Carbon Output Efficiency",
                    "Levelized Cost of Energy",
                    "Local Community Owned Energy",
                    "Lifetime Carbon Offset Estimate"
                ],
                correctAnswer: 1,
                explanation: "LCOE (Levelized Cost of Energy) is the average cost per unit of electricity generated over a plant's lifetime, including all costs (construction, operation, maintenance, fuel). It's used to compare different energy sources economically."
            }
        ]
    },
    mecha: {
        courseName: "Mechatronics",
        questions: [
            {
                id: 1,
                question: "What does 'Mechatronics' integrate?",
                image: "images/mecha/mechatronics-diagram.jpg",
                options: [
                    "Only mechanical and electrical engineering",
                    "Mechanical, electrical, computer, and control engineering",
                    "Only robotics and automation",
                    "Only software and hardware"
                ],
                correctAnswer: 1,
                explanation: "Mechatronics is an interdisciplinary field that integrates mechanical engineering, electrical engineering, computer science, and control engineering to design and create intelligent systems and products."
            },
            {
                id: 2,
                question: "What is a PID controller used for in mechatronic systems?",
                image: null,
                options: [
                    "Power distribution",
                    "Feedback control to maintain desired system output",
                    "Programming integrated devices",
                    "Parallel input/output data transfer"
                ],
                correctAnswer: 1,
                explanation: "PID (Proportional-Integral-Derivative) controller is a feedback control loop mechanism that continuously calculates error and applies corrections to maintain a desired setpoint, widely used in automation and robotics."
            },
            {
                id: 3,
                question: "In Germany, what should you do with Pfand bottles instead of throwing them away?",
                image: "images/waste/pfand-return.jpg",
                options: [
                    "Throw them in the Yellow bin",
                    "Return them to a Pfandautomat machine in supermarkets to get your deposit back",
                    "Put them in glass recycling containers",
                    "Throw them in regular trash"
                ],
                correctAnswer: 1,
                explanation: "Pfand bottles should be returned to a reverse vending machine (Pfandautomat) found in most supermarkets. You'll receive your deposit back (€0.08-€0.25 per container), and the bottles/cans are then recycled or reused."
            },
            {
                id: 4,
                question: "Which sensor converts physical displacement into an electrical signal?",
                image: null,
                options: [
                    "Temperature sensor",
                    "Position sensor (e.g., LVDT, encoder)",
                    "Pressure sensor",
                    "Light sensor"
                ],
                correctAnswer: 1,
                explanation: "Position sensors like LVDT (Linear Variable Differential Transformer) and rotary/linear encoders convert mechanical displacement or rotation into electrical signals, essential for feedback in mechatronic systems."
            },
            {
                id: 5,
                question: "What is an actuator in mechatronics?",
                image: "images/mecha/actuators.jpg",
                options: [
                    "A device that senses physical quantities",
                    "A component that converts energy into motion or force",
                    "A type of microcontroller",
                    "A power supply unit"
                ],
                correctAnswer: 1,
                explanation: "An actuator is a component that converts energy (electrical, hydraulic, pneumatic) into mechanical motion or force. Common examples include motors, hydraulic cylinders, and pneumatic pistons used in robotic systems."
            },
            {
                id: 6,
                question: "In Germany, when are the typical 'Ruhezeiten' (quiet hours) that students should respect in residential buildings?",
                image: null,
                options: [
                    "Only at night after midnight",
                    "Generally 22:00-07:00 weekdays, and all day Sunday",
                    "There are no quiet hours in Germany",
                    "Only during exam periods"
                ],
                correctAnswer: 1,
                explanation: "Ruhezeiten (quiet hours) are typically from 22:00-07:00 on weekdays, 22:00-08:00 on Saturdays, and all day on Sundays and public holidays. During these times, noise should be kept to a minimum. Specific rules may vary by city and building."
            },
            {
                id: 7,
                question: "What is the difference between open-loop and closed-loop control systems?",
                image: "images/mecha/control-loops.jpg",
                options: [
                    "Open-loop is faster, closed-loop is slower",
                    "Open-loop has no feedback, closed-loop uses feedback to adjust output",
                    "Open-loop is digital, closed-loop is analog",
                    "There is no difference"
                ],
                correctAnswer: 1,
                explanation: "Open-loop systems operate without feedback (e.g., washing machine timer), while closed-loop systems use sensors to monitor output and adjust inputs accordingly (e.g., thermostat), providing better accuracy and stability."
            },
            {
                id: 8,
                question: "Which waste items belong in the Biotonne (brown/green bin) in Germany?",
                image: "images/waste/biotonne-accepted.jpg",
                options: [
                    "All biodegradable materials including coated paper",
                    "Food scraps, coffee grounds, tea bags, and garden waste",
                    "Plastic bags labeled as biodegradable",
                    "Any organic-looking waste"
                ],
                correctAnswer: 1,
                explanation: "The Biotonne accepts food scraps (fruit/vegetable peels, eggshells), coffee grounds, tea bags, cut flowers, and garden waste. Note: Meat and bones policies vary by region. Biodegradable plastic bags are often NOT allowed."
            },
            {
                id: 9,
                question: "What does DOF stand for in robotics?",
                image: null,
                options: [
                    "Direction of Force",
                    "Degrees of Freedom",
                    "Digital Output Function",
                    "Dynamically Operated Function"
                ],
                correctAnswer: 1,
                explanation: "DOF (Degrees of Freedom) refers to the number of independent ways a robot or mechanism can move. For example, a robot arm with 6 DOF can move in 6 independent directions (3 translational, 3 rotational)."
            },
            {
                id: 10,
                question: "What type of motor provides precise position control and is commonly used in robotics?",
                image: null,
                options: [
                    "AC Induction motor",
                    "Servo motor or Stepper motor",
                    "Universal motor",
                    "Brushed DC motor without encoder"
                ],
                correctAnswer: 1,
                explanation: "Servo motors (with feedback control) and stepper motors (precise step movements) are preferred for robotics and mechatronic applications requiring accurate position control, repeatability, and holding torque."
            }
        ]
    }
};
