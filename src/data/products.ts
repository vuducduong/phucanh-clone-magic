const products = [
  {
    type: "streetLight",
    typeName: "Street light - Đèn đường",
    specs: {
        operatingVoltage: "100-240V",
        powerSupply: "MEANWELL/INVENTRONICS",
        ledChip: "LUXEON5050",
        maintenanceFactor: ">0.95",
        colorTemperature: "2700-6500K",
        lifetime: "50,000 hours",
        ipRating: "IP66",
        cri: "70/80",
        dimming: "If required",
        netWeight: "4.5 kgs",
    },
    variants: [
        { code: "STVN08-160LY", power: "80W", luminousFlux: "12,800 lm", efficacy: "160 lm/W", dimensions: "703*200*H109 mm",},
        { code: "STVN05-160LY", power: "50W", luminousFlux: "8,000 lm", efficacy: "160 lm/W", dimensions: "703*200*H109 mm",},
    ],
    images: ["https://example.com/street1.jpg"],
  },
  {
    type: "floodLight",
    typeName: "Flood light - Đèn chiếu pha",
    specs: {
        operatingVoltage: "120-277V",           
        powerSupply: "Lumiles",                 
        ledChip: "Lumines LED",                 
        maintenanceFactor: ">0.95",           
        colorTemperature: "4000/5000/5700K",   
        colorRenderingIndex: "Ra 70",           
        lifespan: "50,000 hours",               
        ipRating: "IP66",                       
        averageDimmingRate: "4% per year",
        },
    variants: [
       { code: "FLVNXXX-140-170LM", power: "40-400W", luminousFlux: "68000-680000lm", luminousEfficiency: "max 170lm/W", dimensions: "XXX*XXX*XXXmm", weight: "XXkgs"
  }
    ],
    images: ["https://example.com/flood1.jpg"],
  },
  {
    type: "tubeLight",
    typeName: "Tube light - Đèn tuýp",
    specs: {
        operatingVoltage: "220-240V",
        driver: "SMD2835",
        beamAngle: "180-300°",
        maintenanceFactor: ">0.95",
        colorRenderingIndex: ">Ra80",
        colorTemperature: "6000-6500K",
        lifetime: "50,000 hours",
        ipRating: "IP20",
        energyEfficiency: "130-195lm/W",
        averageLumenDepreciation: "4% per year"
    },
    variants: [
        { code: "T8060-165WS-65K", power: "6W", luminousFlux: "1000lm", luminousEfficiency: "165lm/W", dimensions: "600mm"},
        { code: "T8VN11-185PV", power: "10.6W", luminousFlux: "2000lm", luminousEfficiency: "185lm/W", dimensions: "1200mm"},
        { code: "T8VN14-180PV", power: "14W", luminousFlux: "2520lm", luminousEfficiency: "180lm/W", dimensions: "1200mm"},
        { code: "T8VN18-195PV", power: "18W", luminousFlux: "3500lm", luminousEfficiency: "195lm/W", dimensions: "1200mm"},
        { code: "T8VN20-180PV", power: "20W", luminousFlux: "3600lm", luminousEfficiency: "180lm/W", dimensions: "1200mm"}
    ],
    images: ["https://example.com/tube1.jpg"],
  },
  {
    type: "panelLight",
    typeName: "Pannel light - Đèn gắn trần",
    specs: {
        operatingVoltage: "AC220-240V",
        ledChip: "Lifud",
        maintenanceFactor: ">0.9",
        colorRenderingIndex: ">Ra80",
        colorTemperature: "3000-6500K",
        lifetime: "50,000 hours",
        ipRating: "IP20",
        averageLumenDepreciation: "4% per year"
    },
    variants: [
        { code: "PLVN40-110WN", power: "40W", luminousFlux: "4400lm", luminousEfficiency: "110lm/W", dimensions: "595*595*31mm" },
        { code: "PLVN30-150WN", power: "30W", luminousFlux: "4400lm", luminousEfficiency: "150lm/W", dimensions: "595*595*31mm" }
    ],
    images: ["https://example.com/panel1.jpg"],
  },
  {
    typeId: "highBay",
    typeName: "Highbay - Đèn nhà xưởng",
    specs: {
        operatingVoltage: "120-277V",
        powerSupply: "Sosen",
        ledChip: "Liteon 5050",
        beamAngle: "60/90/110°",
        maintenanceFactor: ">0.95",
        colorTemperature: "4000/5000/5700K",
        lifetime: "50,000 hours",
        ipRating: "IP65",
        averageLumenDepreciation: "4% per year"
    },
    variants: [
        { code: "HBPA150-140BT-57K", power: "150W", luminousFlux: "21000lm", luminousEfficiency: "140lm/W", dimensions: "Φ266*120mm" },
        { code: "HBPA080-185BT-57K", power: "80W", luminousFlux: "14800lm", luminousEfficiency: "185lm/W", dimensions: "Φ246*115mm" },
        { code: "HBPA100-185BT-57K", power: "100W", luminousFlux: "18500lm", luminousEfficiency: "185lm/W", dimensions: "Φ246*115mm" },
        { code: "HBPA150-185BT-57K", power: "150W", luminousFlux: "27750lm", luminousEfficiency: "185lm/W", dimensions: "Φ266*120mm" },
        { code: "HBPA200-185BT-57K", power: "200W", luminousFlux: "37000lm", luminousEfficiency: "185lm/W", dimensions: "Φ298*129mm" },
        { code: "HBPA240-185BT-57K", power: "240W", luminousFlux: "44400lm", luminousEfficiency: "185lm/W", dimensions: "Φ325*137mm" }
    ],
    images: ["https://example.com/highbay1.jpg"],
  },
];
