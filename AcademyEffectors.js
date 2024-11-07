let academyEffectorPortal = {
  pages: {
    default: {},
  },
}

const sections = [
  {
    name: 'General',
    children: [
      {
        id: 'playerlevel',
        type: 'number',
        label: 'Player Level',
        style: { width: 60 },
      },
      {
        id: 'loopsfilled',
        type: 'number',
        label: 'Loops Filled',
        style: { width: 80 },
      },
      { id: 'engineering', type: 'checkbox', label: 'Engineering Badge' },
      { id: 'fragmentation', type: 'checkbox', label: 'Fragmentation Badge' },
      { id: 'ouroboros', type: 'checkbox', label: 'Ouroboros Unlocked' },
      { id: 'knox', type: 'checkbox', label: 'Knox Unlocked' },
    ],
  },
  {
    name: 'Loop Mod',
    children: [
      {
        id: 'zeusrankbenefits',
        type: 'number',
        label: 'Zeus Rank Benefits',
        max: 10,
        text: '/ 10',
        info: {
          type: 'mod',
          icon: 'zeus-rank-benefit.jpg',
          position: 'Left, Fleet zone',
          effect: '+1% mat per Zeus rank',
          cost: 'e98 mp',
        },
      },
      {
        id: 'mathauling',
        type: 'number',
        label: 'Material Hauling',
        text: '/ 999',
        style: { width: 60 },
        info: {
          type: 'mod',
          icon: 'material-hauling.jpg',
          position: 'Right, Academy zone',
          effect: '+5% mat',
          cost: 'e169 mp',
        },
      },
      {
        id: 'beyonders',
        type: 'number',
        label: 'Rule of the Beyonders',
        style: { width: 80 },
        info: {
          type: 'mod',
          icon: 'rule-of-the-beyonders.jpg',
          position: 'Top',
          effect: '+1% mat',
          cost: 'e300 mp',
        },
      },
      {
        id: 'swarm',
        type: 'number',
        label: 'Rule of the Swarm',
        max: 30,
        text: '/ 30',
        info: {
          type: 'mod',
          icon: 'rule-of-the-swarm.jpg',
          position: 'Top',
          effect: '+51.11% mat, +3.11% speed',
          cost: 'e350 mp',
        },
      },
      {
        id: 'expansion',
        type: 'number',
        label: 'Rule of Expansion',
        style: { width: 80 },
        info: {
          type: 'mod',
          icon: 'rule-of-expansion.jpg',
          position: 'Right',
          effect: '+1% mat',
          cost: 'e300 mp',
        },
      },
      {
        id: 'productivity',
        type: 'number',
        label: 'Rule of Productivity',
        max: 10,
        text: '/ 10',
        info: {
          type: 'mod',
          icon: 'rule-of-productivity.jpg',
          position: 'Top-Right',
          effect: '+0.2% mat / PL, +10% speed',
          cost: 'e1020 mp',
        },
      },
      {
        id: 'looping',
        type: 'number',
        label: 'Rule of Looping',
        max: 10,
        text: '/ 10',
        info: {
          type: 'mod',
          icon: 'rule-of-looping.jpg',
          position: 'Top-Right',
          effect: '+0.02% mat / loop filled',
          cost: 'e1030 mp',
        },
      },
      {
        id: 'sekhur5',
        type: 'number',
        label: 'Planet Sekhur-5',
        max: 1,
        text: '/ 1',
        isOuro: true,
      },
    ],
  },
  {
    name: 'Zeus',
    children: [
      { id: 'zeusrank', type: 'number', label: 'Rank' },
      { id: 'zeuscrew', type: 'number', label: 'Crew', style: { width: 60 } },
      {
        id: 'zeusprogress',
        type: 'number',
        label: 'To Next',
        text: ' ',
        textId: 'zeusrankrequirement',
        style: { width: 70 },
      },
      {
        id: 'zeusinstall3',
        type: 'number',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Material Scavenger Vehicles">Install 3</label>',
        max: 5,
        textHtml:
          '/ <label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Starts at 1, changes over time">5</label> <span class="text-super">*</c>',
      },
      {
        id: 'zeusinstall6',
        type: 'number',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Academy Auto-Scrappers">Install 6</label>',
        max: 75,
        textHtml:
          '/ <label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Starts at 15, changes over time">75</label> <span class="text-super">*</c>',
      },
    ],
    style: 'min-width: 260px',
  },
  {
    name: 'Ouroboros',
    isOuro: true,
    children: [
      { id: 'ourocrew', type: 'number', label: 'Crew', style: { width: 60 } },
      {
        id: 'ouroinstall5',
        type: 'number',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Bio-Meterial Duplicatio Tech">Install 5</label>',
        max: 20,
      },
    ],
    style: 'min-width: 260px',
  },
  {
    name: 'Shard Milestone',
    children: [
      {
        id: 'wonderous',
        type: 'number',
        label: '(26) Wonderous',
        style: { width: 60 },
      },
      {
        id: 'earthly',
        type: 'number',
        label: '(29) Earthly',
        style: { width: 60 },
      },
    ],
  },
  {
    name: 'Diamond Shop',
    children: [
      {
        id: 'specialmats',
        type: 'number',
        label: 'Special: Mats',
        max: 30,
        text: '/ 30',
      },
      {
        id: 'ultimamatbonus',
        type: 'number',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="Insert Bonus value, not level! e.g. 1.1">Ultima: Mats Bonus</label>',
        max: 30,
        isOuro: true,
      },
      { id: 'iapCollector', type: 'checkbox', label: 'IAP: Collectors Pack' },
    ],
  },
  {
    name: 'Research',
    children: [
      {
        id: 'mission1',
        type: 'select',
        label: 'Mission Analysis 1',
        maxLevel: 6,
        text: 'Material:  Lv2 x1.5, Lv4 x1.5, Lv6 x1.5',
        textClassName: 'font-normal',
      },
      {
        id: 'mission2',
        type: 'select',
        label: 'Mission Analysis 2',
        maxLevel: 6,
        text: 'Material:  Lv2 x1.75, Lv4 x1.75, Lv6 x1.75',
        textClassName: 'font-normal',
      },
      {
        id: 'mission3',
        type: 'select',
        label: 'Mission Analysis 3',
        maxLevel: 6,
        text: 'Speed: Lv1 x1.05, Lv3: x1.05, Lv5: x1.05',
        textClassName: 'font-normal',
      },
      {
        id: 'mission4',
        type: 'select',
        label: 'Mission Analysis <s>4</s>3 <span class="text-super">1</c>',
        maxLevel: 6,
        text: 'Material:  Lv2 x2, Lv4 x3, Lv6 x4',
        textClassName: 'font-normal',
      },
      {
        id: 'mission5',
        type: 'select',
        label: 'Mission Analysis <s>5</s>4 <span class="text-super">2</c>',
        maxLevel: 6,
        text: 'Material:  Lv2 x3, Lv4 x4, Lv6 x5',
        textClassName: 'font-normal',
      },
      {
        id: 'perfection2',
        type: 'select',
        label: 'Perfection Analysis 2',
        maxLevel: 6,
        text: 'Material:  Lv2 x5',
        textClassName: 'font-normal',
      },
      {
        id: 'perfection3',
        type: 'select',
        label: 'Perfection Analysis <s>3</s>2 <span class="text-super">3</c>',
        maxLevel: 6,
        text: 'Lv2: Material x5; Lv5: Speed *2',
        textClassName: 'font-normal',
      },
      {
        id: 'perfection4',
        type: 'select',
        label: 'Perfection Analysis <s>4</s>3 <span class="text-super">4</c>',
        maxLevel: 6,
        text: 'Lv2: Material x9; Lv5: Speed *2',
        textClassName: 'font-normal',
      },
      {
        id: 'construction1',
        type: 'select',
        label: 'Construction Analysis 1',
        maxLevel: 6,
        text: 'Proj Cost: - , /1.5 , - , /2, - , /2.5',
        textClassName: 'font-normal',
      },
      {
        id: 'construction2',
        type: 'select',
        label: 'Construction Analysis 2',
        maxLevel: 6,
        text: 'Proj Cost: - , /2 , /3 , /3 , /4 , /4',
        textClassName: 'font-normal',
      },
    ].map((i) => {
      i.labelClassName = 'font-normal'
      return i
    }),
  },
  {
    name: 'Ouro Content',
    isOuro: true,
    children: [
      {
        id: 'meltdown',
        type: 'number',
        label: 'Meltdown Effect',
        style: { width: 80 },
      },
      {
        id: 'relic3',
        type: 'number',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="The Time-Glider Engine">Relic 3</label>',
        max: 100,
        text: '/ 100',
      },
      {
        id: 'relic5',
        type: 'number',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="The Portable Pocket Dimension Storage Unit">Relic 5</label>',
        max: 8,
        text: '/ 8',
      },
      {
        id: 'relic20',
        type: 'number',
        label:
          '<label class="has-tip" data-bs-toggle="tooltip" data-bs-title="The Chrystonian Prism">Relic 20</label>',
        max: 100,
        text: '/ 100',
      },
      { id: 'darkinno', type: 'checkbox', label: 'Dark Innovation Badge' },
      {
        id: 'creationgemnode3bonus',
        type: 'number',
        label: 'Creation Gem Node #3 Bonus',
      },
      {
        id: 'ts04',
        type: 'checkbox',
        label: 'trait sphere 04: +1 ultima mod max level'
      },
      {
        id: 'ts07',
        type: 'checkbox',
        label: 'trait sphere 07: x2 farm missions completed'
      },
      {
        id: 'ts09',
        type: 'checkbox',
        label: 'trait sphere 09: +2 ultima mod max level'
      },
      {
        id: 'ts11',
        type: 'checkbox',
        label: 'trait sphere 11: +2 ultima mod max level'
      },
      {
        id: 'ts12',
        type: 'checkbox',
        label: 'trait sphere 12: +2 ultima mod max level'
      },
      {
        id: 'ts14',
        type: 'checkbox',
        label: 'trait sphere 14: +3 ultima mod max level'
      },
    ],
  },
  {
    name: 'Knox Content',
    isKnox: true,
    children: [
      {
        id: 'knoxMaxStage',
        type: 'number',
        label: 'Knox Max Stage Reached',
        style: { width: 60 },
      },
      {
        id: 'knoxAPSOWlvl',
        type: 'number',
        label: 'Knox Academy Points Spoils Of War Level',
        style: { width: 60 },
      },
      {
        id: 'knoxMatSOWlvl',
        type: 'number',
        label: 'Knox Materials Spoils Of War Level',
        style: { width: 60 },
      },
      {
        id: 'necrumBonus',
        type: 'number',
        label: 'Necrum Exchange material bonus',
        style: { width: 60 },
      },
      {
        id: 'extractorDrillBonus',
        type: 'number',
        label: 'Heavy-Duty Auto Extractor-Drill gadget material bonus',
        style: { width: 60 },
      },
    ]
  }
]

academyEffectorPortal.pages.default.dataLinkage = {
  set playerlevel(value) {
    playerData.level = value
  },
  set loopsfilled(value) {
    playerData.loopsFilled = value
  },
  set zeusrankbenefits(value) {
    playerData.loopMods.zeusRankBenefits = value
  },
  set mathauling(value) {
    playerData.loopMods.materialHauling = value
  },
  set beyonders(value) {
    playerData.loopMods.beyonders = value
  },
  set swarm(value) {
    playerData.loopMods.swarm = value
  },
  set expansion(value) {
    playerData.loopMods.expansion = value
  },
  set productivity(value) {
    playerData.loopMods.productivity = value
  },
  set looping(value) {
    playerData.loopMods.looping = value
  },
  set sekhur5(value) {
    playerData.loopMods.sekhur5 = value
  },

  get playerlevel() {
    return playerData.level
  },
  get loopsfilled() {
    return playerData.loopsFilled
  },
  get zeusrankbenefits() {
    return playerData.loopMods.zeusRankBenefits
  },
  get mathauling() {
    return playerData.loopMods.materialHauling
  },
  get beyonders() {
    return playerData.loopMods.beyonders
  },
  get swarm() {
    return playerData.loopMods.swarm
  },
  get expansion() {
    return playerData.loopMods.expansion
  },
  get productivity() {
    return playerData.loopMods.productivity
  },
  get looping() {
    return playerData.loopMods.looping
  },
  get sekhur5() {
    return playerData.loopMods.sekhur5
  },

  set zeuscrew(value) {
    playerData.fleet.zeus.crew = value
  },
  set zeusrank(value) {
    playerData.fleet.zeus.rank.current = value
  },
  set zeusprogress(value) {
    playerData.fleet.zeus.rank.progress = value
  },
  set zeusinstall3(value) {
    playerData.fleet.zeus.installs[2] = value
  },
  set zeusinstall6(value) {
    playerData.fleet.zeus.installs[5] = value
  },
  set ourocrew(value) {
    playerData.fleet.ouro.crew = value
  },
  set ouroinstall5(value) {
    playerData.fleet.ouro.installs[4] = value
  },
  set warpdrive(value) {
    playerData.academy.projectLevels[5] = value
  },
  set engineering(value) {
    playerData.academy.badges.engineering = value
  },

  get zeuscrew() {
    return playerData.fleet.zeus.crew
  },
  get zeusrank() {
    return playerData.fleet.zeus.rank.current
  },
  get zeusprogress() {
    return playerData.fleet.zeus.rank.progress
  },
  get zeusinstall3() {
    return playerData.fleet.zeus.installs[2]
  },
  get zeusinstall6() {
    return playerData.fleet.zeus.installs[5]
  },
  get ourocrew() {
    return playerData.fleet.ouro.crew
  },
  get ouroinstall5() {
    return playerData.fleet.ouro.installs[4]
  },
  get warpdrive() {
    return playerData.academy.projectLevels[5]
  },
  get engineering() {
    return playerData.academy.badges.engineering
  },

  set wonderous(value) {
    playerData.shardMilestones[25] = value
  },
  set earthly(value) {
    playerData.shardMilestones[28] = value
  },
  set mission1(value) {
    playerData.research.mission[0] = value
  },
  set mission2(value) {
    playerData.research.mission[1] = value
  },
  set mission3(value) {
    playerData.research.mission[2] = value
  },
  set mission4(value) {
    playerData.research.mission[3] = value
  },
  set mission5(value) {
    playerData.research.mission[4] = value
  },
  set perfection1(value) {
    playerData.research.perfection[0] = value
  },
  set perfection2(value) {
    playerData.research.perfection[1] = value
  },
  set perfection3(value) {
    playerData.research.perfection[2] = value
  },
  set perfection4(value) {
    playerData.research.perfection[3] = value
  },
  set construction1(value) {
    playerData.research.construction[0] = value
  },
  set construction2(value) {
    playerData.research.construction[1] = value
  },
  set specialmats(value) {
    playerData.diamonds.special.materials = value
  },
  set ultimamatbonus(value) {
    playerData.diamonds.ultima.materialBonus = value
  },
  set iapCollector(value) {
    playerData.diamonds.iapCollector = value
  },

  get wonderous() {
    return playerData.shardMilestones[25]
  },
  get earthly() {
    return playerData.shardMilestones[28]
  },
  get mission1() {
    return playerData.research.mission[0]
  },
  get mission2() {
    return playerData.research.mission[1]
  },
  get mission3() {
    return playerData.research.mission[2]
  },
  get mission4() {
    return playerData.research.mission[3]
  },
  get mission5() {
    return playerData.research.mission[4]
  },
  get perfection1() {
    return playerData.research.perfection[0]
  },
  get perfection2() {
    return playerData.research.perfection[1]
  },
  get perfection3() {
    return playerData.research.perfection[2]
  },
  get perfection4() {
    return playerData.research.perfection[3]
  },
  get construction1() {
    return playerData.research.construction[0]
  },
  get construction2() {
    return playerData.research.construction[1]
  },
  get specialmats() {
    return playerData.diamonds.special.materials
  },
  get ultimamatbonus() {
    return playerData.diamonds.ultima.materialBonus
  },
  get iapCollector() {
    return playerData.diamonds.iapCollector
  },

  set ouroboros(value) {
    playerData.ouro.enabled = value
  },
  set meltdown(value) {
    playerData.ouro.meltdown = value
  },
  set relic3(value) {
    playerData.relics.relic3 = value
  },
  set relic5(value) {
    playerData.relics.relic5 = value
  },
  set relic20(value) {
    playerData.relics.relic20 = value
  },
  set darkinno(value) {
    playerData.academy.badges.darkInnovation = value
  },
  set ts04(value) {
    playerData.ouro.ts04 = value
  },
  set ts07(value) {
    playerData.ouro.ts07 = value
  },
  set ts09(value) {
    playerData.ouro.ts09 = value
  },
  set ts11(value) {
    playerData.ouro.ts11 = value
  },
  set ts12(value) {
    playerData.ouro.ts12 = value
  },
  set ts14(value) {
    playerData.ouro.ts14 = value
  },
  set knoxMaxStage(value) {
    playerData.knox.maxStage = value
  },
  set knoxAPSOWlvl(value) {
    playerData.knox.knoxAPSOWlvl = value
  },
  set knoxMatSOWlvl(value) {
    playerData.knox.knoxMatSOWlvl = value
  },
  set necrumBonus(value) {
    playerData.knox.necrumBonus = value
  },
  set extractorDrillBonus(value) {
    playerData.knox.extractorDrillBonus = value
  },

  get ouroboros() {
    return playerData.ouro.enabled
  },
  get meltdown() {
    return playerData.ouro.meltdown
  },
  get relic3() {
    return playerData.relics.relic3
  },
  get relic5() {
    return playerData.relics.relic5
  },
  get relic20() {
    return playerData.relics.relic20
  },
  get darkinno() {
    return playerData.academy.badges.darkInnovation
  },
  get ultimaLoopModMaxLevelBonus() {
    return playerData.ouro.ultimaLoopModMaxLevelBonus
  },
  get ts04() {
    return playerData.ouro.ts04
  },
  get ts07() {
    return playerData.ouro.ts07
  },
  get ts09() {
    return playerData.ouro.ts09
  },
  get ts11() {
    return playerData.ouro.ts11
  },
  get ts12() {
    return playerData.ouro.ts12
  },
  get ts14() {
    return playerData.ouro.ts14
  },
  get knoxMaxStage() {
    return playerData.knox.maxStage
  },
  get knoxAPSOWlvl() {
    return playerData.knox.knoxAPSOWlvl
  },
  get knoxMatSOWlvl() {
    return playerData.knox.knoxMatSOWlvl
  },
  get necrumBonus() {
    return playerData.knox.necrumBonus
  },
  get extractorDrillBonus() {
    return playerData.knox.extractorDrillBonus
  },
}

academyEffectorPortal.pages.default.initFunction = function (panel) {
  const wrapper = createElement('div', 'section-2', { style: 'gap: 20px' })

  const ouroEnabled = !!portalPanel.dataLinkage.ouroboros
  const knoxEnabled = !!portalPanel.dataLinkage.knox

  sections.forEach(({ name, children, style, isOuro, isKnox }) => {
    if (isOuro && !ouroEnabled) return
    if (isKnox && !knoxEnabled) return
    const section = createElement('div', 'section-3', { style })
    const header = createElement('h5', '', null, name)
    section.appendChild(header)

    children
      .map(({ id, label, type, text, style = {}, info, ...props }) => {
        if (props.isOuro && !ouroEnabled) return

        if (['select', 'number', 'checkbox'].includes(type)) {
          const group = createElement(
            'div',
            'd-flex align-items-center column-gap-2 mb-2',
          )

          // label
          const labelWrapper = $('<div>').addClass(
            props.labelClassName ? props.labelClassName : 'flex-fill',
          )
          const labelEl = $('<label>')
            .addClass('col-form-label col-form-label-sm')
            .html(label)
          if (info) {
            if (info.type === 'mod') {
              labelEl
                .addClass('has-tip')
                .attr('data-bs-container', 'body')
                .attr('data-bs-toggle', 'popover')
                .attr('data-bs-trigger', 'hover focus')
                .attr('data-bs-placement', 'top')
                .attr('data-bs-html', 'true')
                .attr(
                  'data-bs-title',
                  [
                    '<div>',
                    `<img src="assets/loopmod/${info.icon}" class="loopmod-tip-icon" />`,
                    label,
                    '</div>',
                  ].join(''),
                )
                .attr(
                  'data-bs-content',
                  [
                    '<div>',
                    `<div><strong>Position:</strong> ${info.position}</div>`,
                    `<div><strong>Effect:</strong> ${info.effect}</div>`,
                    `<div><strong>Starting Cost:</strong> ${info.cost}</div>`,
                    '</div>',
                  ].join(''),
                )
            }
          }

          labelWrapper.append(labelEl).appendTo($(group))

          // input
          const inputWrapper = createElement('div', '')
          group.appendChild(inputWrapper)

          if (type === 'number') {
            const input = createElement(
              'input',
              'form-control form-control-sm text-center',
              {
                id: id,
                type: 'number',
                min: 0,
                style: `width: ${style.width || 50}px;`,
                value: portalPanel.dataLinkage[id],
              },
            )
            if (props.max) input.max = props.max
            input.addEventListener('change', portalPanel.updateFunction)
            inputWrapper.appendChild(input)
          }

          if (type === 'select') {
            const select = createElement(
              'select',
              'form-select form-select-sm',
              {
                id: id,
              },
            )
            if (props.maxLevel) {
              select.innerHTML =
                '<option value="0">-</option>' +
                Array(props.maxLevel)
                  .fill(null)
                  .map(
                    (_, i) => `<option value="${i + 1}">Lv ${i + 1}</option>`,
                  )
                  .join('')
            } else {
              select.innerHTML = props.options
                .map((p) => `<option value="${p.value}">${p.label}</option>`)
                .join('')
            }
            select.value = portalPanel.dataLinkage[id] * 1
            select.addEventListener('change', portalPanel.updateFunction)
            inputWrapper.appendChild(select)
          }

          if (type === 'checkbox') {
            const input = createElement('input', 'form-check-input', {
              id,
              type: 'checkbox',
            })
            input.checked = portalPanel.dataLinkage[id]
            input.addEventListener('change', portalPanel.updateFunction)
            inputWrapper.appendChild(input)
          }

          if (text || props.textHtml) {
            const textCol = createElement('div', '')
            const textEl = createElement('span', 'form-text', '', text || '')
            if (props.textHtml) textEl.innerHTML = props.textHtml
            if (props.textId) {
              textEl.id = props.textId
              portalPanel[props.textId] = textEl
            }
            if (props.textClassName) textEl.classList.add(props.textClassName)
            textCol.appendChild(textEl)
            group.appendChild(textCol)
          }

          return group
        }

        return null
      })
      .filter(Boolean)
      .forEach((el) => section.appendChild(el))

    wrapper.appendChild(section)
  })

  try {
    const tips = [
      "After complete all form inputs, cross check numbers in 2nd and 3rd tabs displaying in small texts with in-game values for validation. Don't forget to update Proj #9 if you've unlocked it before validating.",
      'Some researches are named wrong in-game, try match them with research bonus instead.',
    ]

    const notes = [
      "It's in-game mislabeled as Mission Analysis 3",
      "It's in-game mislabeled as Mission Analysis 4",
      "It's in-game mislabeled as Perfection Analysis 2",
      "It's in-game mislabeled as Perfection Analysis 3",
    ]

    $(
      '<div class="section-3 font-normal" style="font-size: 0.8em; max-width: 400px;">',
    )
      .append($('<h6>Tips</h6>'))
      .append($('<ol>').append(tips.map((tip) => $('<li>').text(tip))))
      .append($('<h6>Notes</h6>'))
      .append(
        notes.map((note, i) => {
          return $(`<p><span class="text-super">${i + 1}</span> : ${note}</p>`)
        }),
      )
      .appendTo(wrapper)
  } catch (e) {
    console.error(e)
  }

  panel.appendChild(wrapper)

  portalPanel['zeusrankrequirement'].innerText =
    '/ ' +
    (GameDB.fleet.zeus.rankRequirements[portalPanel.dataLinkage.zeusrank] ||
      'no data')

  initTooltips()
  initPopovers()
}

academyEffectorPortal.pages.default.updateFunction = function (e) {
  if (/^select$/i.test(e.target.tagName)) {
    portalPanel.dataLinkage[e.target.id] = parseInt(e.target.value, 10)
    SavePlayerData()
    return
  }

  if (e.target.type === 'checkbox') {
    portalPanel.dataLinkage[e.target.id] = e.target.checked
    SavePlayerData()

    if (e.target.id === 'ouroboros') {
      location.reload()
    }

    return
  }

  if (e.target.type === 'number') {
    if (
      ['meltdown', 'ultimamatbonus', 'creationgemnode3bonus'].indexOf(
        e.target.id,
      ) > -1
    ) {
      portalPanel.dataLinkage[e.target.id] = parseFloat(e.target.value)
    } else {
      portalPanel.dataLinkage[e.target.id] = parseInt(e.target.value)
    }
    SavePlayerData()

    if (e.target.id === 'zeusrank') {
      portalPanel['zeusrankrequirement'].innerText =
        '/ ' +
        (GameDB.fleet.zeus.rankRequirements[
          portalPanel.dataLinkage[e.target.id]
        ] || 'no data')
    }

    return
  }

  let value = parseBigNum(e.target.value)
  if (isNaN(value)) {
    e.target.value = 0
  } else {
    portalPanel.dataLinkage[e.target.id] = value
  }
  SavePlayerData()
}
