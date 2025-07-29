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

// Function to combine all family data once all files are loaded
function combineAllFamilyData() {
  const allFamilies = []

  // Add all family data arrays
  if (window.family1Data) allFamilies.push(...window.family1Data)
  if (window.family2Data) allFamilies.push(...window.family2Data)
  if (window.family3Data) allFamilies.push(...window.family3Data)
  if (window.family4Data) allFamilies.push(...window.family4Data)
  if (window.family5Data) allFamilies.push(...window.family5Data)
  if (window.family6Data) allFamilies.push(...window.family6Data)
  if (window.family7Data) allFamilies.push(...window.family7Data)
  if (window.family8Data) allFamilies.push(...window.family8Data)
  if (window.family9Data) allFamilies.push(...window.family9Data)
  if (window.family10Data) allFamilies.push(...window.family10Data)

  return allFamilies
}

// Wait for all family data to load, then combine
let loadAttempts = 0
const maxLoadAttempts = 20

function tryLoadAllFamilies() {
  loadAttempts++

  const combinedData = combineAllFamilyData()

  if (combinedData.length > 0) {
    window.familyData = combinedData
    console.log("=== COMPLETE FAMILY TREE LOADED ===")
    console.log("Total members across all families:", combinedData.length)
    console.log("=== FAMILY BREAKDOWN ===")
    console.log("1. A T Mohamed unny & P.M Kochu Rabiya:", window.family1Data?.length || 0, "members")
    console.log("2. A T kunjupathumma & P.K Athakutty:", window.family2Data?.length || 0, "members")
    console.log("3. A T Pathavu & Veetiparambil Avvutty:", window.family3Data?.length || 0, "members")
    console.log("4. A T Nafeesakutty & M.A Bappu Moulavi:", window.family4Data?.length || 0, "members")
    console.log("5. A.T AliKunji & P.K Kunhipathunni:", window.family5Data?.length || 0, "members")
    console.log("6. A.T Kunjaisu & R.V Mohammed Haji:", window.family6Data?.length || 0, "members")
    console.log("7. A.T Aminakutty & A.M Bayu:", window.family7Data?.length || 0, "members")
    console.log("8. A T Aboobakker & Rasiya .P.N:", window.family8Data?.length || 0, "members")
    console.log("9. A.T Zainba & Abdul Kadar:", window.family9Data?.length || 0, "members")
    console.log("10. A T Ibrahim Kutty & Zohra Ibrahim:", window.family10Data?.length || 0, "members")
    console.log("=====================================")

    // Trigger the family tree to render if the app is ready
    if (window.setFamilyData) {
      window.setFamilyData(combinedData)
    }
  } else if (loadAttempts < maxLoadAttempts) {
    console.log(`Waiting for family data to load... attempt ${loadAttempts}/${maxLoadAttempts}`)
    setTimeout(tryLoadAllFamilies, 200)
  } else {
    console.error("Failed to load all family data after", maxLoadAttempts, "attempts")
  }
}

// Start trying to load all families
setTimeout(tryLoadAllFamilies, 500)

// Function to set family data (for compatibility)
window.setFamilyData = (data) => {
  window.familyData = data
  console.log("Family data updated:", data.length, "members")
}

console.log("Complete family data loader initialized")
