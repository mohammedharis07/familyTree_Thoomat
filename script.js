// Enhanced Family Tree Application with Futuristic Design
console.log("🌳 Futuristic Family Tree - Initializing...")

// Global Application State
let currentViewMode = "generation"
let collapsedFamilies = new Set()
let currentSearchTerm = ""
let filteredMembers = []
let isMobileMenuOpen = false
let familyData = []
let isLoading = true

// Branch color mapping for visual distinction
const branchColors = [
  "branch-rose",
  "branch-blue",
  "branch-emerald",
  "branch-amber",
  "branch-violet",
  "branch-cyan",
  "branch-lime",
  "branch-pink",
]

// Initialize the application when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 DOM loaded, starting initialization...")

  showLoadingScreen()
  initializeParticleSystem()

  // Try to load family data with progressive retry
  let attempts = 0
  const maxAttempts = 15

  const tryLoadData = () => {
    attempts++
    console.log(`📊 Loading attempt ${attempts}/${maxAttempts}...`)

    if (window.familyData && window.familyData.length > 0) {
      familyData = window.familyData
      filteredMembers = [...familyData]

      console.log(`✅ Family data loaded successfully: ${familyData.length} members`)
      console.log(`📈 Statistics:`, window.familyStats)

      hideLoadingScreen()
      showApplication()
      initializeEventListeners()
      initializeParticleBackground()
      renderFamilyTree()
      updateStatsPanel()

      isLoading = false
    } else if (attempts < maxAttempts) {
      setTimeout(tryLoadData, attempts * 100)
    } else {
      console.error("❌ Failed to load family data after maximum attempts")
      showErrorScreen()
    }
  }

  // Start loading with a small delay
  setTimeout(tryLoadData, 200)
})

// Loading Screen Management
function showLoadingScreen() {
  const loading = document.getElementById("loading-message")
  const app = document.getElementById("app")
  const error = document.getElementById("error-message")

  if (loading) {
    loading.style.display = "flex"
    // Animate progress bar
    const progressBar = loading.querySelector(".progress-bar")
    if (progressBar) {
      progressBar.style.animation = "loading-progress 2s ease-in-out infinite"
    }
  }
  if (app) app.style.display = "none"
  if (error) error.style.display = "none"
}

function hideLoadingScreen() {
  const loading = document.getElementById("loading-message")
  if (loading) {
    loading.style.opacity = "0"
    setTimeout(() => {
      loading.style.display = "none"
    }, 500)
  }
}

function showErrorScreen() {
  const loading = document.getElementById("loading-message")
  const app = document.getElementById("app")
  const error = document.getElementById("error-message")

  if (loading) loading.style.display = "none"
  if (app) app.style.display = "none"
  if (error) error.style.display = "flex"
}

function showApplication() {
  const app = document.getElementById("app")
  if (app) {
    app.style.display = "block"
    app.style.opacity = "0"
    setTimeout(() => {
      app.style.opacity = "1"
      app.style.transition = "opacity 0.5s ease-in-out"
    }, 100)
  }
}

// Particle System Initialization
function initializeParticleSystem() {
  const particlesContainer = document.querySelector(".loading-particles")
  if (!particlesContainer) return

  // Create floating particles for loading screen
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div")
    particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `
    particlesContainer.appendChild(particle)
  }
}

function initializeParticleBackground() {
  const particlesContainer = document.querySelector(".floating-particles")
  if (!particlesContainer) return

  // Enhanced particle system for main application
  particlesContainer.innerHTML = ""

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div")
    particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
        `
    particlesContainer.appendChild(particle)
  }
}

// Event Listeners Initialization
function initializeEventListeners() {
  console.log("🎯 Initializing event listeners...")

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleMobileMenu)
  }

  // Search functionality
  const searchInput = document.getElementById("search-input")
  const mobileSearchInput = document.getElementById("mobile-search-input")
  const searchClear = document.getElementById("search-clear")
  const mobileSearchClear = document.getElementById("mobile-search-clear")

  if (searchInput) {
    searchInput.addEventListener("input", (e) => handleSearch(e.target.value))
    searchInput.addEventListener("focus", () => addSearchFocus(searchInput))
    searchInput.addEventListener("blur", () => removeSearchFocus(searchInput))
  }

  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("input", (e) => handleSearch(e.target.value))
  }

  if (searchClear) {
    searchClear.addEventListener("click", clearSearch)
  }

  if (mobileSearchClear) {
    mobileSearchClear.addEventListener("click", clearSearch)
  }

  // View mode controls
  const viewBtns = document.querySelectorAll(".view-btn, .mobile-view-btn")
  viewBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const mode = e.currentTarget.dataset.mode
      setViewMode(mode)
      if (isMobileMenuOpen) toggleMobileMenu()
    })
  })

  // Expand/Collapse controls
  const expandBtns = document.querySelectorAll("#expand-all-btn, #mobile-expand-btn")
  expandBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleAllFamilies()
      if (isMobileMenuOpen) toggleMobileMenu()
    })
  })

  // Keyboard shortcuts
  document.addEventListener("keydown", handleKeyboardShortcuts)

  console.log("✅ Event listeners initialized")
}

// Enhanced Search Functionality
function handleSearch(searchTerm) {
  currentSearchTerm = searchTerm.toLowerCase().trim()

  // Sync search inputs
  const desktopInput = document.getElementById("search-input")
  const mobileInput = document.getElementById("mobile-search-input")

  if (desktopInput && desktopInput.value !== searchTerm) {
    desktopInput.value = searchTerm
  }
  if (mobileInput && mobileInput.value !== searchTerm) {
    mobileInput.value = searchTerm
  }

  // Show/hide clear buttons
  const clearButtons = document.querySelectorAll("#search-clear, #mobile-search-clear")
  clearButtons.forEach((btn) => {
    btn.style.display = searchTerm ? "block" : "none"
  })

  if (currentSearchTerm === "") {
    filteredMembers = [...familyData]
    hideSearchInfo()
  } else {
    // Enhanced search with multiple criteria
    filteredMembers = familyData.filter(
      (member) =>
        member.name.toLowerCase().includes(currentSearchTerm) ||
        (member.profession && member.profession.toLowerCase().includes(currentSearchTerm)) ||
        (member.qualification && member.qualification.toLowerCase().includes(currentSearchTerm)) ||
        member.branch.toLowerCase().includes(currentSearchTerm) ||
        (member.contact && member.contact.includes(currentSearchTerm)),
    )
    showSearchInfo()
  }

  renderFamilyTree()
  updateStatsPanel()
}

function clearSearch() {
  currentSearchTerm = ""
  filteredMembers = [...familyData]

  // Clear inputs
  const inputs = document.querySelectorAll("#search-input, #mobile-search-input")
  inputs.forEach((input) => (input.value = ""))

  // Hide clear buttons
  const clearButtons = document.querySelectorAll("#search-clear, #mobile-search-clear")
  clearButtons.forEach((btn) => (btn.style.display = "none"))

  hideSearchInfo()
  renderFamilyTree()
  updateStatsPanel()
}

function showSearchInfo() {
  const searchInfo = document.getElementById("search-info")
  const searchInfoText = document.getElementById("search-info-text")
  const resultsCounts = document.querySelectorAll("#search-results-count, #mobile-search-results-count")

  if (searchInfo && searchInfoText) {
    const resultCount = filteredMembers.length
    searchInfo.style.display = "block"
    searchInfoText.textContent = `Found ${resultCount} member${resultCount !== 1 ? "s" : ""} matching "${currentSearchTerm}"`

    resultsCounts.forEach((count) => {
      count.style.display = "block"
      count.textContent = `${resultCount} result${resultCount !== 1 ? "s" : ""}`
    })
  }
}

function hideSearchInfo() {
  const searchInfo = document.getElementById("search-info")
  const resultsCounts = document.querySelectorAll("#search-results-count, #mobile-search-results-count")

  if (searchInfo) searchInfo.style.display = "none"
  resultsCounts.forEach((count) => (count.style.display = "none"))
}

function addSearchFocus(input) {
  const container = input.closest(".search-container")
  if (container) {
    container.style.borderColor = "rgba(255, 255, 255, 0.4)"
    container.style.boxShadow = "0 0 0 2px rgba(0, 212, 255, 0.3)"
  }
}

function removeSearchFocus(input) {
  const container = input.closest(".search-container")
  if (container) {
    container.style.borderColor = "rgba(255, 255, 255, 0.2)"
    container.style.boxShadow = "none"
  }
}

// View Mode Management
function setViewMode(mode) {
  currentViewMode = mode

  // Update button states
  document.querySelectorAll(".view-btn").forEach((btn) => btn.classList.remove("active"))
  document.querySelectorAll(".mobile-view-btn").forEach((btn) => btn.classList.remove("active"))

  const activeButtons = document.querySelectorAll(`[data-mode="${mode}"]`)
  activeButtons.forEach((btn) => btn.classList.add("active"))

  // Show/hide expand controls
  const expandBtns = document.querySelectorAll("#expand-all-btn, #mobile-expand-btn")
  expandBtns.forEach((btn) => {
    btn.style.display = mode === "family" ? "flex" : "none"
  })

  renderFamilyTree()
}

function toggleAllFamilies() {
  const familyHeads = getFamilyHeads()
  const allHeadIds = familyHeads.map((head) => head.id)

  if (collapsedFamilies.size === allHeadIds.length) {
    collapsedFamilies.clear()
    updateExpandAllButton("Expand All")
  } else {
    collapsedFamilies = new Set(allHeadIds)
    updateExpandAllButton("Collapse All")
  }

  renderFamilyTree()
}

function updateExpandAllButton(text) {
  const expandBtns = document.querySelectorAll("#expand-all-btn span, #mobile-expand-btn")
  expandBtns.forEach((btn) => {
    if (btn.tagName === "SPAN") {
      btn.textContent = text
    } else {
      btn.innerHTML = `<i class="fas fa-expand-arrows-alt"></i> ${text}`
    }
  })
}

function toggleFamilyCollapse(headId) {
  if (collapsedFamilies.has(headId)) {
    collapsedFamilies.delete(headId)
  } else {
    collapsedFamilies.add(headId)
  }
  renderFamilyTree()
}

// Mobile Menu Management
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu")
  const menuBtn = document.getElementById("mobile-menu-btn")

  if (mobileMenu && menuBtn) {
    if (mobileMenu.classList.contains("show")) {
      mobileMenu.classList.remove("show")
      menuBtn.classList.remove("active")
      isMobileMenuOpen = false
    } else {
      mobileMenu.classList.add("show")
      menuBtn.classList.add("active")
      isMobileMenuOpen = true
    }
  }
}

// Data Processing Functions
function getGenerations() {
  const generations = {}
  filteredMembers.forEach((member) => {
    if (!generations[member.generation]) {
      generations[member.generation] = []
    }
    generations[member.generation].push(member)
  })
  return generations
}

function getFamilyHeads() {
  return filteredMembers.filter((member) => member.isHead && member.generation === 1)
}

function getAllDescendants(parentId) {
  const descendants = []
  const children = filteredMembers.filter((member) => member.parentId === parentId)

  children.forEach((child) => {
    descendants.push(child)
    if (child.spouse) {
      const spouse = filteredMembers.find(
        (member) => member.name === child.spouse && member.generation === child.generation,
      )
      if (spouse) descendants.push(spouse)
    }
    descendants.push(...getAllDescendants(child.id))
  })

  return descendants
}

function groupSpouses(members) {
  const grouped = []
  const processed = new Set()

  members.forEach((member) => {
    if (processed.has(member.id)) return

    if (member.spouse) {
      const spouse = members.find((m) => m.name === member.spouse && m.generation === member.generation)
      if (spouse && !processed.has(spouse.id)) {
        grouped.push([member, spouse])
        processed.add(member.id)
        processed.add(spouse.id)
      } else if (!processed.has(member.id)) {
        grouped.push(member)
        processed.add(member.id)
      }
    } else {
      grouped.push(member)
      processed.add(member.id)
    }
  })

  return grouped
}

// Utility Functions
function getBranchColorClass(branch) {
  const hash = branch.split("").reduce((a, b) => a + b.charCodeAt(0), 0)
  return branchColors[hash % branchColors.length]
}

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .substring(0, 3)
}

function formatProfession(profession) {
  if (!profession) return ""
  return profession.charAt(0).toUpperCase() + profession.slice(1)
}

// Stats Panel Management
function updateStatsPanel() {
  const totalMembersEl = document.getElementById("total-members")
  if (totalMembersEl) {
    totalMembersEl.textContent = filteredMembers.length
  }
}

// Keyboard Shortcuts
function handleKeyboardShortcuts(e) {
  if (e.ctrlKey || e.metaKey) {
    switch (e.key) {
      case "f":
        e.preventDefault()
        const searchInput = document.getElementById("search-input")
        if (searchInput) searchInput.focus()
        break
      case "1":
        e.preventDefault()
        setViewMode("generation")
        break
      case "2":
        e.preventDefault()
        setViewMode("family")
        break
    }
  }

  if (e.key === "Escape") {
    if (isMobileMenuOpen) toggleMobileMenu()
    if (currentSearchTerm) clearSearch()
  }
}

// Main Rendering Functions
function renderFamilyTree() {
  console.log("🎨 Rendering family tree...")
  const container = document.getElementById("family-tree-container")
  const noResults = document.getElementById("no-results")

  if (!container || !noResults) {
    console.error("❌ Container elements not found")
    return
  }

  if (filteredMembers.length === 0 && currentSearchTerm !== "") {
    container.style.display = "none"
    noResults.style.display = "flex"
    return
  } else {
    container.style.display = "block"
    noResults.style.display = "none"
  }

  if (currentViewMode === "generation") {
    container.innerHTML = renderGenerationView()
  } else {
    container.innerHTML = renderFamilyView()
  }

  // Add smooth animations to newly rendered elements
  const cards = container.querySelectorAll(".member-card")
  cards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    setTimeout(() => {
      card.style.transition = "all 0.5s ease"
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }, index * 50)
  })

  console.log("✅ Family tree rendered successfully")
}

function renderGenerationView() {
  const generations = getGenerations()
  const sortedGenerations = Object.keys(generations).sort((a, b) => Number(a) - Number(b))

  if (sortedGenerations.length === 0) {
    return '<div class="no-content">No family members found.</div>'
  }

  return sortedGenerations
    .map((genKey) => {
      const generation = Number(genKey)
      const members = generations[generation]
      const groupedMembers = groupSpouses(members)

      return `
            <div class="generation-section">
                <div class="generation-label">
                    <div class="generation-badge">
                        <i class="fas fa-star"></i>
                        <span>GENERATION ${generation}</span>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="members-grid">
                    ${groupedMembers
                      .map((memberOrPair) => {
                        if (Array.isArray(memberOrPair)) {
                          return `
                                <div class="spouse-pair">
                                    ${memberOrPair.map((member) => renderMemberCard(member, true)).join("")}
                                    <div class="marriage-line"></div>
                                </div>
                            `
                        } else {
                          return renderMemberCard(memberOrPair)
                        }
                      })
                      .join("")}
                </div>
            </div>
        `
    })
    .join("")
}

function renderFamilyView() {
  const familyHeads = getFamilyHeads()

  if (familyHeads.length === 0) {
    return '<div class="no-content">No family heads found.</div>'
  }

  return familyHeads
    .map((head) => {
      const spouse = filteredMembers.find(
        (member) => member.name === head.spouse && member.generation === head.generation,
      )
      const descendants = getAllDescendants(head.id)
      const isCollapsed = collapsedFamilies.has(head.id)

      return `
            <div class="family-section">
                <div class="family-header">
                    <div class="family-title">
                        <i class="fas fa-crown"></i>
                        <span>${head.name} FAMILY</span>
                        <i class="fas fa-crown"></i>
                    </div>
                    <button class="family-toggle" onclick="toggleFamilyCollapse('${head.id}')">
                        <i class="fas fa-chevron-${isCollapsed ? "down" : "up"}"></i>
                        <span>${isCollapsed ? "Expand Family" : "Collapse Family"}</span>
                    </button>
                </div>
                
                ${
                  !isCollapsed
                    ? `
                    <div class="family-content">
                        <div class="family-heads">
                            <div class="spouse-pair">
                                ${renderMemberCard(head)}
                                ${
                                  spouse
                                    ? `
                                    <div class="marriage-line"></div>
                                    ${renderMemberCard(spouse)}
                                `
                                    : ""
                                }
                            </div>
                        </div>
                        
                        ${
                          descendants.length > 0
                            ? `
                            <div class="descendants">
                                ${renderDescendantsByGeneration(descendants)}
                            </div>
                        `
                            : ""
                        }
                    </div>
                `
                    : `
                    <div class="collapsed-state">
                        <div class="collapsed-info">
                            <div class="collapsed-info-content">
                                <i class="fas fa-eye-slash"></i>
                                <span>Family tree collapsed • ${descendants.length} members hidden</span>
                            </div>
                        </div>
                    </div>
                `
                }
            </div>
        `
    })
    .join("")
}

function renderDescendantsByGeneration(descendants) {
  const generations = {}
  descendants.forEach((descendant) => {
    if (!generations[descendant.generation]) {
      generations[descendant.generation] = []
    }
    generations[descendant.generation].push(descendant)
  })

  return [2, 3, 4, 5, 6]
    .map((gen) => {
      const genDescendants = generations[gen]
      if (!genDescendants || genDescendants.length === 0) return ""

      const groupedDescendants = groupSpouses(genDescendants)

      return `
            <div class="generation-group">
                <div class="generation-group-label">
                    <div class="generation-group-badge">
                        <span>Generation ${gen}</span>
                    </div>
                </div>
                <div class="members-grid">
                    ${groupedDescendants
                      .map((memberOrPair) => {
                        if (Array.isArray(memberOrPair)) {
                          return `
                                <div class="spouse-pair">
                                    ${memberOrPair.map((member) => renderMemberCard(member, true)).join("")}
                                    <div class="marriage-line"></div>
                                </div>
                            `
                        } else {
                          return renderMemberCard(memberOrPair, true)
                        }
                      })
                      .join("")}
                </div>
            </div>
        `
    })
    .join("")
}

function renderMemberCard(member, isSpousePair = false) {
  const branchColorClass = getBranchColorClass(member.branch)
  const isSearchMatch =
    currentSearchTerm &&
    (member.name.toLowerCase().includes(currentSearchTerm) ||
      (member.profession && member.profession.toLowerCase().includes(currentSearchTerm)) ||
      (member.qualification && member.qualification.toLowerCase().includes(currentSearchTerm)) ||
      member.branch.toLowerCase().includes(currentSearchTerm) ||
      (member.contact && member.contact.includes(currentSearchTerm)))

  const cardClass = `member-card ${branchColorClass} ${member.isHead ? "family-head" : ""} ${
    member.isDeceased ? "deceased" : ""
  } ${isSpousePair ? "spouse-card" : ""} ${isSearchMatch ? "search-highlight" : ""}`

  return `
        <div class="${cardClass}">
            ${
              member.isHead
                ? `
                <div class="crown-badge">
                    <i class="fas fa-crown"></i>
                </div>
            `
                : ""
            }
            
            <div class="member-content">
                <div class="member-photo">
                    <div class="photo-frame ${member.isHead ? "family-head" : ""}">
                        <div class="photo-placeholder">
                            ${getInitials(member.name)}
                        </div>
                    </div>
                </div>
                
                <h3 class="member-name ${isSpousePair ? "spouse-name" : ""}">
                    ${member.name}
                    ${member.isDeceased ? '<span class="deceased-indicator">(Late)</span>' : ""}
                </h3>
                
                <div class="member-details">
                    ${
                      member.profession
                        ? `
                        <div class="detail-item profession">
                            <i class="fas fa-briefcase"></i>
                            <span>${formatProfession(member.profession)}</span>
                        </div>
                    `
                        : ""
                    }
                    
                    ${
                      member.qualification
                        ? `
                        <div class="detail-item qualification">
                            <i class="fas fa-graduation-cap"></i>
                            <span>${member.qualification}</span>
                        </div>
                    `
                        : ""
                    }
                    
                    ${
                      member.contact
                        ? `
                        <div class="detail-item contact">
                            <i class="fas fa-phone"></i>
                            <span>${member.contact}</span>
                        </div>
                    `
                        : ""
                    }
                </div>
                
                <div class="member-badges">
                    ${
                      member.isHead
                        ? `
                        <div class="badge head">
                            <i class="fas fa-crown"></i>
                            HEAD
                        </div>
                    `
                        : ""
                    }
                    
                    ${
                      member.spouse
                        ? `
                        <div class="badge married">
                            <i class="fas fa-heart"></i>
                            MARRIED
                        </div>
                    `
                        : ""
                    }
                    
                    ${
                      member.children && member.children.length > 0
                        ? `
                        <div class="badge children">
                            <i class="fas fa-users"></i>
                            ${member.children.length}
                        </div>
                    `
                        : ""
                    }
                </div>
                
                <div class="branch-info">
                    <div class="branch-label">FAMILY BRANCH</div>
                    <div class="branch-name">${member.branch}</div>
                </div>
            </div>
        </div>
    `
}

// Make functions globally available for onclick handlers
window.toggleFamilyCollapse = toggleFamilyCollapse
window.clearSearch = clearSearch

console.log("🌟 Futuristic Family Tree - Script loaded successfully")
