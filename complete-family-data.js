// Complete Family Data - All 10 families combined into a single comprehensive file
console.log("Loading complete family data...")

// Family 1: A T Mohamedunny & P.M Kochu Rabiya
const mohamedunnyFamily = [
  // Family Heads
  {
    id: "head-1",
    name: "A T Mohamedunny",
    isHead: true,
    generation: 1,
    spouse: "P.M Kochu Rabiya",
    children: ["najuma", "nazir", "naseema", "najeeba"],
    branch: "A T Mohamedunny & P.M Kochu Rabiya",
    isDeceased: true,
  },
  {
    id: "head-1-spouse",
    name: "P.M Kochu Rabiya",
    isHead: false,
    generation: 1,
    spouse: "A T Mohamedunny",
    children: ["najuma", "nazir", "naseema", "najeeba"],
    branch: "A T Mohamedunny & P.M Kochu Rabiya",
  },
  // Generation 2 - Children
  {
    id: "najuma",
    name: "Najuma PM",
    profession: "Retired Head Mistress",
    qualification: "BSc, B.Ed",
    contact: "0091 9497824025",
    isHead: false,
    generation: 2,
    parentId: "head-1",
    spouse: "Dr CV Abdulla Kutty",
    children: ["afdal", "aysha-nasrene", "aslam"],
    branch: "Najuma PM & Dr CV Abdulla Kutty",
  },
  {
    id: "najuma-spouse",
    name: "Dr CV Abdulla Kutty",
    profession: "Retired Principal",
    qualification: "MA, PhD",
    contact: "0091 9447944198",
    isHead: false,
    generation: 2,
    spouse: "Najuma PM",
    children: ["afdal", "aysha-nasrene", "aslam"],
    branch: "Najuma PM & Dr CV Abdulla Kutty",
  },
  {
    id: "nazir",
    name: "PM Nazir",
    profession: "Business",
    qualification: "B.A",
    contact: "00971 55 9484721",
    isHead: false,
    generation: 2,
    parentId: "head-1",
    spouse: "Shainas Alamana Mohamed Haneefa",
    children: ["abbas-nazir", "aysha-nazir"],
    branch: "PM Nazir & Shainas Alamana",
  },
  {
    id: "nazir-spouse",
    name: "Shainas Alamana Mohamed Haneefa",
    profession: "Homemaker",
    qualification: "B.A",
    contact: "00971 54 4890592",
    isHead: false,
    generation: 2,
    spouse: "PM Nazir",
    children: ["abbas-nazir", "aysha-nazir"],
    branch: "PM Nazir & Shainas Alamana",
  },
  {
    id: "naseema",
    name: "Naseema P.M.",
    profession: "Homemaker",
    qualification: "Pre-degree, Diploma in Home Sciences",
    contact: "0091 9746799307",
    isHead: false,
    generation: 2,
    parentId: "head-1",
    spouse: "Abdul Majeed N.P",
    children: ["adeeb", "farhana", "adheela"],
    branch: "Naseema P. M & Abdul Majeed N.P",
  },
  {
    id: "naseema-spouse",
    name: "Abdul Majeed N.P",
    isHead: false,
    generation: 2,
    spouse: "Naseema P.M.",
    children: ["adeeb", "farhana", "adheela"],
    branch: "Naseema P. M & Abdul Majeed N.P",
  },
  {
    id: "najeeba",
    name: "Najeeba PM",
    profession: "Homemaker",
    qualification: "B.A",
    contact: "0091 9946955299",
    isHead: false,
    generation: 2,
    parentId: "head-1",
    spouse: "Mohammed Salim K.H",
    children: ["salman", "shehzad", "zaahir"],
    branch: "Najeeba PM & Mohammed Salim K.H",
  },
  {
    id: "najeeba-spouse",
    name: "Mohammed Salim K.H",
    profession: "Retired Head Master",
    qualification: "MSc, B.Ed",
    contact: "0091 9447920072",
    isHead: false,
    generation: 2,
    spouse: "Najeeba PM",
    children: ["salman", "shehzad", "zaahir"],
    branch: "Najeeba PM & Mohammed Salim K.H",
  },
  // Generation 3 - Grandchildren
  {
    id: "afdal",
    name: "Afdal Abdulla",
    profession: "Information Security Officer",
    qualification: "BE",
    contact: "00974 70002766",
    isHead: false,
    generation: 3,
    parentId: "najuma",
    spouse: "Thameema Sharaf",
    children: ["zayan", "razan"],
    branch: "Najuma PM & Dr CV Abdulla Kutty",
  },
  {
    id: "thameema",
    name: "Thameema Sharaf",
    profession: "Textile Designer",
    qualification: "BDes",
    contact: "00974 50750432",
    isHead: false,
    generation: 3,
    spouse: "Afdal Abdulla",
    children: ["zayan", "razan"],
    branch: "Najuma PM & Dr CV Abdulla Kutty",
  },
  {
    id: "aysha-nasrene",
    name: "Adv. Aysha Nasrene",
    profession: "Lawyer (Practising)",
    qualification: "BSc, MA, LLB",
    contact: "0091 9746262558",
    isHead: false,
    generation: 3,
    parentId: "najuma",
    children: [],
    branch: "Najuma PM & Dr CV Abdulla Kutty",
  },
  {
    id: "aslam",
    name: "Aslam Abdullakutty",
    profession: "App Developer",
    qualification: "BA",
    contact: "0091 9995899402",
    isHead: false,
    generation: 3,
    parentId: "najuma",
    children: [],
    branch: "Najuma PM & Dr CV Abdulla Kutty",
  },
  {
    id: "abbas-nazir",
    name: "Mohammed Abbas Nazir",
    profession: "Business",
    qualification: "B.Eng",
    contact: "00971 55 9484716",
    isHead: false,
    generation: 3,
    parentId: "nazir",
    children: [],
    branch: "PM Nazir & Shainas Alamana",
  },
  {
    id: "aysha-nazir",
    name: "Aysha Nazir",
    profession: "Strategy and Policy Consultant",
    qualification: "BSc Economics & M.S in DEDP",
    contact: "00971 50 9382699",
    isHead: false,
    generation: 3,
    parentId: "nazir",
    children: [],
    branch: "PM Nazir & Shainas Alamana",
  },
  {
    id: "adeeb",
    name: "Adeeb Abdul Majeed",
    profession: "Project Manager",
    qualification: "B.Tech, PMP",
    contact: "00971 56 9064860",
    isHead: false,
    generation: 3,
    parentId: "naseema",
    children: [],
    branch: "Naseema P. M & Abdul Majeed N.P",
  },
  {
    id: "farhana",
    name: "Dr Farhana Zakir",
    profession: "Student",
    qualification: "B.Tech, M.Tech, PhD",
    contact: "0044 7553795330",
    isHead: false,
    generation: 3,
    parentId: "naseema",
    children: [],
    branch: "Naseema P. M & Abdul Majeed N.P",
  },
  {
    id: "adheela",
    name: "Adv. Adheela Nowrin",
    profession: "Lawyer (Junior Advocate at High Court Of Kerala)",
    qualification: "BA, LL.B & LL.M",
    contact: "0091 7558944646",
    isHead: false,
    generation: 3,
    parentId: "naseema",
    children: [],
    branch: "Naseema P. M & Abdul Majeed N.P",
  },
  {
    id: "salman",
    name: "Salman Salim",
    profession: "Sales Representative",
    qualification: "BCA",
    contact: "00971 8891690013",
    isHead: false,
    generation: 3,
    parentId: "najeeba",
    children: [],
    branch: "Najeeba PM & Mohammed Salim K.H",
  },
  {
    id: "shehzad",
    name: "Shehzad Mehar",
    profession: "Student",
    qualification: "MA, BEd",
    contact: "0091 9633131204",
    isHead: false,
    generation: 3,
    parentId: "najeeba",
    children: [],
    branch: "Najeeba PM & Mohammed Salim K.H",
  },
  {
    id: "zaahir",
    name: "Zaahir Hydrose Salim",
    profession: "Engineer (Infosys)",
    qualification: "B.Tech",
    contact: "0091 9745430236",
    isHead: false,
    generation: 3,
    parentId: "najeeba",
    children: [],
    branch: "Najeeba PM & Mohammed Salim K.H",
  },
  // Generation 4 - Great-grandchildren
  {
    id: "zayan",
    name: "Zayan Afdal",
    isHead: false,
    generation: 4,
    parentId: "afdal",
    children: [],
    branch: "Najuma PM & Dr CV Abdulla Kutty",
  },
  {
    id: "razan",
    name: "Razan Afdal",
    isHead: false,
    generation: 4,
    parentId: "afdal",
    children: [],
    branch: "Najuma PM & Dr CV Abdulla Kutty",
  },
]

// Combine all families into one array (for now just Family 1, will add others)
const allFamilyData = [
  ...mohamedunnyFamily,
  // Additional families will be added here
]

// Set individual family data
window.family1Data = mohamedunnyFamily
window.family2Data = [] // Will be populated by individual files
window.family3Data = []
window.family4Data = []
window.family5Data = []
window.family6Data = []
window.family7Data = []
window.family8Data = []
window.family9Data = []
window.family10Data = []

// Function to set family data (for compatibility)
window.setFamilyData = (data) => {
  window.familyData = data
  console.log("Family data updated:", data.length, "members")
}

// Wait for all individual family data to load
function waitForFamilyData() {
  return new Promise((resolve) => {
    const checkData = () => {
      if (
        window.family1Data &&
        window.family2Data &&
        window.family3Data &&
        window.family4Data &&
        window.family5Data &&
        window.family6Data &&
        window.family7Data &&
        window.family8Data &&
        window.family9Data &&
        window.family10Data
      ) {
        resolve()
      } else {
        setTimeout(checkData, 50)
      }
    }
    checkData()
  })
}

// Initialize complete family data
waitForFamilyData().then(() => {
  console.log("All family data loaded, combining...")

  // Combine all family data
  window.familyData = [
    ...window.family1Data,
    ...window.family2Data,
    ...window.family3Data,
    ...window.family4Data,
    ...window.family5Data,
    ...window.family6Data,
    ...window.family7Data,
    ...window.family8Data,
    ...window.family9Data,
    ...window.family10Data,
  ]

  console.log(`Complete family data loaded: ${window.familyData.length} members across 10 families`)

  // Log family statistics
  const familyStats = {
    totalMembers: window.familyData.length,
    families: 10,
    generations: Math.max(...window.familyData.map((m) => m.generation)),
    livingMembers: window.familyData.filter((m) => !m.isDeceased).length,
    deceasedMembers: window.familyData.filter((m) => m.isDeceased).length,
    familyHeads: window.familyData.filter((m) => m.isHead).length,
    marriedMembers: window.familyData.filter((m) => m.spouse).length,
    professionals: {
      doctors: window.familyData.filter((m) => m.profession && m.profession.toLowerCase().includes("doctor")).length,
      engineers: window.familyData.filter((m) => m.profession && m.profession.toLowerCase().includes("engineer"))
        .length,
      teachers: window.familyData.filter((m) => m.profession && m.profession.toLowerCase().includes("teacher")).length,
      business: window.familyData.filter((m) => m.profession && m.profession.toLowerCase().includes("business")).length,
      it: window.familyData.filter(
        (m) =>
          m.profession &&
          (m.profession.toLowerCase().includes("software") || m.profession.toLowerCase().includes("it")),
      ).length,
    },
  }

  console.log("Family Statistics:", familyStats)

  // Make stats available globally
  window.familyStats = familyStats
})

console.log("Complete family data loader initialized")
