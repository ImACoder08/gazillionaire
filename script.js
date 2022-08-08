let players;
const playerCount = function () {
  players = Number(prompt('How many Players? (2-8)'));
  if (players > 8 || players < 2) {
    playerCount();
  }
};
playerCount();

let playerNEl = document.querySelector('.playerN');
let proffessionEl = document.querySelector('.proffession');
let salaryEl = document.querySelector('.salary');
let interestEl = document.querySelector('.interest');
let dividendsEl = document.querySelector('.dividends');
let realBusinessEl1 = document.querySelector('.realBusiness1');
let realBusinessEl2 = document.querySelector('.realBusiness2');
let realBusinessEl3 = document.querySelector('.realBusiness3');
let realBusinessEl4 = document.querySelector('.realBusiness4');
let realBusinessEl5 = document.querySelector('.realBusiness5');
let realBusinessEl6 = document.querySelector('.realBusiness6');
let totalEl = document.querySelector('.total');
let expensesEl = document.querySelector('.expenses');

let myt4uEl = document.querySelector('.myt4u');
let ok4uEl = document.querySelector('.ok4u');
let gro4uEl = document.querySelector('.gro4u');
let gr8El = document.querySelector('.gr8');
let lymp4uEl = document.querySelector('.lymp4u');

let passiveEl = document.querySelector('.passive');

let driverBought = false;
let teacherBought = false;
let nurseBought = false;
let secretaryBought = false;
let policeBought = false;
let mechanicBought = false;
let lawyerBought = false;
let janitorBought = false;
let engineerBought = false;
let doctorBought = false;
let businessManagerBought = false;
let pilotBought = false;
let dice = Math.trunc(Math.random() * 12) + 1;
let bellEl = document.querySelector('.bell');

let sellMyt4uEl = document.querySelector('.sell--myt4u');
let sellOk4uEl = document.querySelector('.sell--ok4u');
let sellGro4uEl = document.querySelector('.sell--gro4u');
let sellGr8El = document.querySelector('.sell--gr8');
let sellLymp4uEl = document.querySelector('.sell--lymp4u');

let buyMyt4uEl = document.querySelector('.buy--myt4u');
let buyGro4uEl = document.querySelector('.buy--gro4u');
let buyGr8El = document.querySelector('.buy--gr8');
let buyOk4uEl = document.querySelector('.buy--ok4u');
let buyLymp4uEl = document.querySelector('.buy--lymp4u');
let okButton = document.querySelector('.ok');
let btn50 = document.querySelector('.fifty');
let btn100 = document.querySelector('.hundred');
let btn500 = document.querySelector('.five--hundred');
let btn1000 = document.querySelector('.one--thousand');
let btn5000 = document.querySelector('.five--thousand');
btn50.classList.add('hidden');
btn100.classList.add('hidden');
btn500.classList.add('hidden');
btn1000.classList.add('hidden');
btn5000.classList.add('hidden');
let buying = false;
let selling = false;
let buyOpen = false;
let sellOpen = false;

let turnEl = document.querySelector('.turn');
let turn = 1;
turnEl.textContent = turn;

let buyingMyt4u = false;
let buyingGro4u = false;
let buyingGr8 = false;
let buyingOk4u = false;
let buyingLymp4u = false;

let sellingMyt4u = false;
let sellingGro4u = false;
let sellingGr8 = false;
let sellingOk4u = false;
let sellingLymp4u = false;

let positive = false;
let negative = false;

let cashEl = document.querySelector('.cash');
let nextBtn = document.querySelector('.next');

let myt4uCostEl = document.querySelector('.myt4u--cost');
let gro4uCostEl = document.querySelector('.gro4u--cost');
let gr8CostEl = document.querySelector('.gr8--cost');
let ok4uCostEl = document.querySelector('.ok4u--cost');
let lymp4uCostEl = document.querySelector('.lymp4u--cost');

let myt4uCost = Math.trunc(Math.random() * 45) + 5;
myt4uCostEl.textContent = myt4uCost;

let gro4uCost = Math.trunc(Math.random() * 120) + 80;
gro4uCostEl.textContent = gro4uCost;
let gr8Cost = Math.trunc(Math.random() * 45) + 15;
gr8CostEl.textContent = gr8Cost;
let ok4uCost = Math.trunc(Math.random() * 15) + 15;
ok4uCostEl.textContent = ok4uCost;
let lymp4uCost = Math.trunc(Math.random() * 60) + 10;
lymp4uCostEl.textContent = lymp4uCost;
ok4uCostEl.textContent = ok4uCost;

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
modal.classList.add('hidden');
overlay.classList.add('hidden');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

let doodadArr = [];

const doodad1 = {
  doodad1: 'Your car broke down pay 1500',
  doodad1Cost: 1500,
};
const doodad2 = {
  doodad2: 'You Decide the take your family to a nice dinner',
  doodad2Cost: 200,
};
const doodad3 = {
  doodad3: 'Your friend bets 1000 you cant juggle, you lose the bet',
  doodad3Cost: 1000,
};
const doodad4 = {
  doodad4: 'As you drive home you buy some lemonade from some kids',
  doodad4Cost: 30,
};
const doodad5 = {
  doodad5: 'You buy some expensive jewelry',
  doodad5Cost: 700,
};
const doodad6 = {
  doodad6: 'Your water heater leaks',
  doodad6Cost: 800,
};
const doodad7 = {
  doodad7: 'New Boat',
  doodad7Cost: 8000,
};
const doodad8 = {
  doodad8: 'Park in handicap zone',
  doodad8Cost: 100,
};
const doodad9 = {
  doodad9: 'Big Screen TV',
  doodad9Cost: 4000,
};
const doodad10 = {
  doodad10: 'Pay Admission to a sporting event',
  doodad10Cost: 15,
};
const doodad11 = {
  doodad11: 'Pay admission to a sporting event',
  doodad11Cost: 50,
};
const doodad12 = {
  doodad12: 'Pay admission to a sporting event',
  doodad12Cost: 150,
};
const doodad13 = {
  doodad13: 'Pay admission to a sporting event',
  doodad13Cost: 1000,
};
const doodad14 = {
  doodad14: 'Buy New Fishing Rod!',
  doodad14Cost: 100,
};
const doodad15 = {
  doodad15: 'Cars air conditioning dies',
  doodad15Cost: 600,
};
const doodad16 = {
  doodad16: 'Pay Taxes',
  doodad16Cost: 650,
};
const doodad17 = {
  doodad17: 'Enter a 5k',
  doodad17Cost: 35,
};
const doodad18 = {
  doodad18: 'Go to a casino',
  doodad18Cost: 200,
};
const doodad19 = {
  doodad19: 'Family Vacation!',
  doodad19Cost: 2000,
};
const doodad20 = {
  doodad20: 'New Clothing',
  doodad20Cost: 200,
};
const doodad21 = {
  doodad21: 'Signed Mr beast team shirt',
  doodad21Cost: 600,
};
const doodad22 = {
  doodad22: 'Get a New bowling ball',
  doodad22Cost: 60,
};
const doodad23 = {
  doodad23: 'Buy new lawn mower',
  doodad23Cost: 300,
};
const doodad24 = {
  doodad24: 'Buy a new watch',
  doodad24Cost: 200,
};
const doodad25 = {
  doodad25: 'Give Money to charity',
  doodad25Cost: 300,
};
const doodad26 = {
  doodad26: 'Lost Wallet',
  doodad26Cost: 50,
};
const doodad27 = {
  doodad27: 'No Doodad this month',
  doodadCost27: 0,
};
const doodad28 = {
  doodad28: 'Fined for speeding',
  doodadCost28: 120,
};
const doodad29 = {
  doodad29: 'Visit Dentist',
  doodad29Cost: 200,
};
const doodad30 = {
  doodad30: 'Buy Furniture',
  doodad30Cost: 300,
};
const doodad31 = {
  doodad31: 'Go to a concert in vip',
  doodad31Cost: 300,
};
const doodad32 = {
  doodad32: 'Get Scammed Online',
  doodad32Cost: 5000,
};
const doodad33 = {
  doodad33: 'Enter a video game tournament',
  doodad33Cost: 50,
};
const doodad34 = {
  doodad34: 'Buy a signed nintendo switch',
  doodad34Cost: 7000,
};
const doodad35 = {
  doodad35: 'No doodad this month',
  doodad35Cost: 0,
};
const doodad36 = {
  doodad36: 'No doodad this month',
  doodadCost36: 0,
};
doodadArr.push(
  doodad1,
  doodad2,
  doodad3,
  doodad4,
  doodad5,
  doodad6,
  doodad7,
  doodad8,
  doodad9,
  doodad10,
  doodad11,
  doodad12,
  doodad13,
  doodad14,
  doodad15,
  doodad16,
  doodad17,
  doodad18,
  doodad19,
  doodad20,
  doodad21,
  doodad22,
  doodad23,
  doodad24,
  doodad25,
  doodad26,
  doodad27,
  doodad28,
  doodad29,
  doodad30,
  doodad31,
  doodad32,
  doodad33,
  doodad34,
  doodad35,
  doodad36
);
console.log(doodadArr);

const pilot = {
  proffession: 'Pilot',
  salary: 9500,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 9500,
  totalExpenses: 6900,
  cashFlow: 2600,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const businessManager = {
  proffession: 'Business Manager',
  salary: 4600,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 4600,
  totalExpenses: 2930,
  cashFlow: 1670,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const doctor = {
  proffession: 'Doctor',
  salary: 13200,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 13200,
  totalExpenses: 9650,
  cashFlow: 3550,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const engineer = {
  proffession: 'Engineer',
  salary: 4900,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 4900,
  totalExpenses: 3210,
  cashFlow: 1690,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const janitor = {
  proffession: 'Janitor',
  salary: 1600,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 1600,
  totalExpenses: 950,
  cashFlow: 650,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const lawyer = {
  proffession: 'Lawyer',
  salary: 7500,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 7500,
  totalExpenses: 5420,
  cashFlow: 2080,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const mechanic = {
  proffession: 'Mechanic',
  salary: 2000,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 2000,
  totalExpenses: 1280,
  cashFlow: 720,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const nurse = {
  proffession: 'Nurse',
  salary: 3100,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 3100,
  totalExpenses: 1980,
  cashFlow: 1120,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const police = {
  proffession: 'Police',
  salary: 3000,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 3000,
  totalExpenses: 1880,
  cashFlow: 1120,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const secretary = {
  proffession: 'Secretary',
  salary: 2500,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 2500,
  totalExpenses: 1620,
  cashFlow: 880,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const teacher = {
  proffession: 'Teacher',
  salary: 3300,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 3300,
  totalExpenses: 2190,
  cashFlow: 1110,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const driver = {
  proffession: 'Truck Driver',
  salary: 2500,
  interest: 0,
  dividends: 0,
  realBusiness1: 0,
  realBusiness2: 0,
  realBusiness3: 0,
  realBusiness4: 0,
  realBusiness5: 0,
  realBusiness6: 0,
  totalIncome: 2500,
  totalExpenses: 1620,
  cashFlow: 880,
  myt4u: 0,
  gro4u: 0,
  ok4u: 0,
  gr8: 0,
  lymp4u: 0,
  passive: 0,
  cash: 0,
};

const player1 = {
  number: 1,
  proffession: 'homeless',
};
const player2 = {
  number: 2,
  proffession: 'homeless',
};
const player3 = {
  number: 3,
  proffession: 'homeless',
};
const player4 = {
  number: 4,
  proffession: 'homeless',
};
const player5 = {
  number: 5,
  proffession: 'homeless',
};
const player6 = {
  number: 6,
  proffession: 'homeless',
};
const player7 = {
  number: 7,
  proffession: 'homeless',
};
const player8 = {
  number: 8,
  proffession: 'homeless',
};
let stock1;
let stock2;
let stock3;
let stock4;
let stock5;

let currentPlayer = player1;

let jobs = {
  driver,
  teacher,
  nurse,
  secretary,
  police,
  mechanic,
  lawyer,
  janitor,
  engineer,
  doctor,
  businessManager,
  pilot,
};

//removedEl = objArr.splice(0, 1);

const pickJob = function (player) {
  dice = Math.trunc(Math.random() * 12) + 1;

  if (dice == 1 && !pilotBought) {
    player.proffession = pilot;
    pilotBought = true;
  } else if (dice == 2 && !businessManagerBought) {
    player.proffession = businessManager;
    businessManagerBought = true;
  } else if (dice == 3 && !doctorBought) {
    player.proffession = doctor;
    doctorBought = true;
  } else if (dice == 4 && !engineerBought) {
    player.proffession = engineer;
    engineerBought = true;
  } else if (dice == 5 && !janitorBought) {
    player.proffession = janitor;
    janitorBought = true;
  } else if (dice == 6 && !lawyerBought) {
    player.proffession = lawyer;
    lawyerBought = true;
  } else if (dice == 7 && !mechanicBought) {
    player.proffession = mechanic;
    mechanicBought = true;
  } else if (dice == 8 && !nurseBought) {
    player.proffession = nurse;
    nurseBought = true;
  } else if (dice == 9 && !policeBought) {
    player.proffession = police;
    policeBought = true;
  } else if (dice == 10 && !secretaryBought) {
    player.proffession = secretary;
    secretaryBought = true;
  } else if (dice == 11 && !teacherBought) {
    player.proffession = teacher;
    teacherBought = true;
  } else if (dice == 12 && !driverBought) {
    player.proffession = driver;
    driverBought = true;
  } else {
    pickJob(player);
  }

  //}
};

const fillIn = function (player) {
  playerNEl.textContent = player.number;
  proffessionEl.textContent = player.proffession.proffession;
  salaryEl.textContent = player.proffession.salary;
  interestEl.textContent = player.proffession.interest;
  dividendsEl.textContent = player.proffession.dividends;
  realBusinessEl1.textContent = player.proffession.realBusiness1;
  realBusinessEl2.textContent = player.proffession.realBusiness2;
  realBusinessEl3.textContent = player.proffession.realBusiness3;
  realBusinessEl4.textContent = player.proffession.realBusiness4;
  realBusinessEl5.textContent = player.proffession.realBusiness5;
  realBusinessEl6.textContent = player.proffession.realBusiness6;
  totalEl.textContent = player.proffession.cashFlow;
  expensesEl.textContent = player.proffession.totalExpenses;
  myt4uEl.textContent = player.proffession.myt4u;
  ok4uEl.textContent = player.proffession.ok4u;
  gro4uEl.textContent = player.proffession.gro4u;
  gr8El.textContent = player.proffession.gr8;
  lymp4uEl.textContent = player.proffession.lymp4u;
  passiveEl.textContent = player.proffession.passive;
  cashEl.textContent = Math.trunc(player.proffession.cash);
  myt4uCostEl.textContent = myt4uCost;
  gro4uCostEl.textContent = gro4uCost;
  gr8CostEl.textContent = gr8Cost;
  ok4uCostEl.textContent = ok4uCost;
  lymp4uCostEl.textContent = lymp4uCost;
};

//buy--

const clear = function () {
  playerNEl.textContent = ' ';
  proffessionEl.textContent = ' ';
  salaryEl.textContent = ' ';
  interestEl.textContent = ' ';
  dividendsEl.textContent = ' ';
  realBusinessEl1.textContent = ' ';
  realBusinessEl2.textContent = ' ';
  realBusinessEl3.textContent = ' ';
  realBusinessEl4.textContent = ' ';
  realBusinessEl5.textContent = ' ';
  realBusinessEl6.textContent = ' ';
  totalEl.textContent = ' ';
  expensesEl.textContent = ' ';
  myt4uEl.textContent = ' ';
  ok4uEl.textContent = ' ';
  gro4uEl.textContent = ' ';
  gr8El.textContent = ' ';
  lymp4uEl.textContent = ' ';
  passiveEl.textContent = ' ';
};

const okBtn = function () {
  if (
    buyingMyt4u &&
    Number(bellEl.value) * myt4uCost <= currentPlayer.proffession.cash
  ) {
    currentPlayer.proffession.myt4u += Number(bellEl.value);
    currentPlayer.proffession.cash -= Number(bellEl.value) * myt4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    myt4uEl.textContent = currentPlayer.proffession.myt4u;
  }

  if (sellingMyt4u) {
    if (currentPlayer.proffession.myt4u >= Number(bellEl.value)) {
      currentPlayer.proffession.myt4u -= Number(bellEl.value);
      currentPlayer.proffession.cash += Number(bellEl.value) * myt4uCost;
      cashEl.textContent = currentPlayer.proffession.cash;
      myt4uEl.textContent = currentPlayer.proffession.myt4u;
    }
  }

  if (
    buyingOk4u &&
    Number(bellEl.value) * ok4uCost <= currentPlayer.proffession.cash
  ) {
    currentPlayer.proffession.ok4u += Number(bellEl.value);
    currentPlayer.proffession.cash -= Number(bellEl.value) * ok4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    ok4uEl.textContent = currentPlayer.proffession.ok4u;
  }

  if (sellingOk4u && currentPlayer.proffession.ok4u >= Number(bellEl.value)) {
    currentPlayer.proffession.ok4u -= Number(bellEl.value);
    currentPlayer.proffession.cash += Number(bellEl.value) * ok4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    ok4uEl.textContent = currentPlayer.proffession.ok4u;
  }

  if (
    buyingGro4u &&
    Number(bellEl.value) * gro4uCost <= currentPlayer.proffession.cash
  ) {
    currentPlayer.proffession.gro4u += Number(bellEl.value);
    currentPlayer.proffession.cash -= Number(bellEl.value) * gro4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    gro4uEl.textContent = currentPlayer.proffession.gro4u;
  }

  if (sellingGro4u && currentPlayer.proffession.gro4u >= Number(bellEl.value)) {
    currentPlayer.proffession.gro4u -= Number(bellEl.value);
    currentPlayer.proffession.cash += Number(bellEl.value) * gro4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    gro4uEl.textContent = currentPlayer.proffession.gro4u;
  }
  if (sellingGr8 && currentPlayer.proffession.gr8 >= Number(bellEl.value)) {
    currentPlayer.proffession.gr8 -= Number(bellEl.value);
    currentPlayer.proffession.cash += Number(bellEl.value) * gr8Cost;
    cashEl.textContent = currentPlayer.proffession.cash;
    gr8El.textContent = currentPlayer.proffession.gr8;
  }
  if (
    buyingGr8 &&
    Number(bellEl.value) * gr8Cost <= currentPlayer.proffession.cash
  ) {
    currentPlayer.proffession.gr8 += Number(bellEl.value);
    currentPlayer.proffession.cash -= Number(bellEl.value) * gr8Cost;
    cashEl.textContent = currentPlayer.proffession.cash;
    gr8El.textContent = currentPlayer.proffession.gr8;
  }
  if (
    buyingLymp4u &&
    Number(bellEl.value) * lymp4uCost <= currentPlayer.proffession.cash
  ) {
    currentPlayer.proffession.lymp4u += Number(bellEl.value);
    currentPlayer.proffession.cash -= Number(bellEl.value) * lymp4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    lymp4uEl.textContent = currentPlayer.proffession.lymp4u;
  }
  if (
    sellingLymp4u &&
    currentPlayer.proffession.lymp4u >= Number(bellEl.value)
  ) {
    currentPlayer.proffession.lymp4u -= Number(bellEl.value);
    currentPlayer.proffession.cash += Number(bellEl.value) * lymp4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    lymp4uEl.textContent = currentPlayer.proffession.lymp4u;
  }
  bellEl.classList.add('hidden');
  okButton.classList.add('hidden');
  bellEl.value = '';
  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;
  selling = false;

  buyingMyt4u = false;
  buyingGr8 = false;
  buyingGro4u = false;
  buyingOk4u = false;
  buyingLymp4u = false;
  buying = false;
};

btn50.addEventListener('click', function () {
  bellEl.value = 50;
});
btn100.addEventListener('click', function () {
  bellEl.value = 100;
});
btn500.addEventListener('click', function () {
  bellEl.value = 500;
});
btn1000.addEventListener('click', function () {
  bellEl.value = 1000;
});
btn5000.addEventListener('click', function () {
  bellEl.value = 5000;
});

okButton.addEventListener('click', function () {
  okBtn();
});

const sellStock = function () {
  if (selling && !firstTurn) {
    bellEl.classList.remove('hidden');
    okButton.classList.remove('hidden');
    btn50.classList.remove('hidden');
    btn100.classList.remove('hidden');
    btn500.classList.remove('hidden');
    btn1000.classList.remove('hidden');
    btn5000.classList.remove('hidden');
    bellEl.value = '';
  } else if (!selling) {
    bellEl.value = '';
    bellEl.classList.add('hidden');
    okButton.classList.add('hidden');
    btn50.classList.add('hidden');
    btn100.classList.add('hidden');
    btn500.classList.add('hidden');
    btn1000.classList.add('hidden');
    btn5000.classList.add('hidden');
  }
};

const buyStock = function () {
  if (buying) {
    bellEl.classList.remove('hidden');
    okButton.classList.remove('hidden');
    btn50.classList.remove('hidden');
    btn100.classList.remove('hidden');
    btn500.classList.remove('hidden');
    btn1000.classList.remove('hidden');
    btn5000.classList.remove('hidden');
    bellEl.value = '';
  } else if (!buying) {
    bellEl.value = '';
    bellEl.classList.add('hidden');
    okButton.classList.add('hidden');
    btn50.classList.add('hidden');
    btn100.classList.add('hidden');
    btn500.classList.add('hidden');
    btn1000.classList.add('hidden');
    btn5000.classList.add('hidden');
  }
};

sellMyt4uEl.addEventListener('click', function () {
  buyingMyt4u = false;
  buyingGr8 = false;
  buyingGro4u = false;
  buyingOk4u = false;
  buyingLymp4u = false;
  buying = false;
  if (!firstTurn) {
    if (selling) {
      selling = false;
      sellingMyt4u = false;
    } else if (!selling) {
      selling = true;
      sellingMyt4u = true;
    }
  }
  sellStock();
});

buyMyt4uEl.addEventListener('click', function () {
  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;
  selling = false;
  if (!firstTurn) {
    if (buyingMyt4u) {
      buying = false;
      buyingMyt4u = false;
    } else {
      buyingMyt4u = true;
      buying = true;
    }
  }
  buyStock();
});

sellOk4uEl.addEventListener('click', function () {
  buyingMyt4u = false;
  buyingGr8 = false;
  buyingGro4u = false;
  buyingOk4u = false;
  buyingLymp4u = false;
  buying = false;
  if (!firstTurn) {
    if (selling) {
      selling = false;
      sellingOk4u = false;
    } else if (!selling) {
      selling = true;
      sellingOk4u = true;
    }
  }
  sellStock();
});

buyGro4uEl.addEventListener('click', function () {
  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;
  selling = false;
  if (!firstTurn) {
    if (buyingGro4u) {
      buying = false;
      buyingGro4u = false;
    } else {
      buyingGro4u = true;
      buying = true;
    }
  }
  buyStock();
});

sellGro4uEl.addEventListener('click', function () {
  buyingMyt4u = false;
  buyingGr8 = false;
  buyingGro4u = false;
  buyingOk4u = false;
  buyingLymp4u = false;
  buying = false;
  if (!firstTurn) {
    if (selling) {
      selling = false;
      sellingGro4u = false;
    } else if (!selling) {
      selling = true;
      sellingGro4u = true;
    }
  }
  sellStock();
});

sellGr8El.addEventListener('click', function () {
  buyingMyt4u = false;
  buyingGr8 = false;
  buyingGro4u = false;
  buyingOk4u = false;
  buyingLymp4u = false;
  buying = false;
  if (!firstTurn) {
    if (selling) {
      selling = false;
      sellingGr8 = false;
    } else if (!selling) {
      selling = true;
      sellingGr8 = true;
    }
  }
  sellStock();
});

buyGr8El.addEventListener('click', function () {
  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;
  selling = false;
  if (!firstTurn) {
    if (buyingGr8) {
      buying = false;
      buyingGr8 = false;
    } else {
      buyingGr8 = true;
      buying = true;
    }
  }
  buyStock();
});

buyLymp4uEl.addEventListener('click', function () {
  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;
  selling = false;
  if (!firstTurn) {
    if (buyingLymp4u) {
      buying = false;
      buyingLymp4u = false;
    } else {
      buyingLymp4u = true;
      buying = true;
    }
  }
  buyStock();
});

sellLymp4uEl.addEventListener('click', function () {
  buyingMyt4u = false;
  buyingGr8 = false;
  buyingGro4u = false;
  buyingOk4u = false;
  buyingLymp4u = false;
  buying = false;
  if (!firstTurn) {
    if (selling) {
      selling = false;
      sellingLymp4u = false;
    } else if (!selling) {
      selling = true;
      sellingLymp4u = true;
    }
  }
  sellStock();
});

buyOk4uEl.addEventListener('click', function () {
  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;
  if (!firstTurn) {
    if (buyingOk4u) {
      buying = false;
      buyingOk4u = false;
    } else {
      buyingOk4u = true;
      buying = true;
    }
  }
  buyStock();
});

let playerN = 0;
const playerTrack = [
  player1,
  player2,
  player3,
  player4,
  player5,
  player6,
  player7,
  player8,
];

const next = function () {
  if (playerN < players - 1) {
    playerN += 1;
    currentPlayer = playerTrack[playerN];

    if (firstTurn) {
      pickJob(playerTrack[playerN]);
      //currentPlayer.proffession.cash += currentPlayer.proffession.cashFlow;
      fillIn(playerTrack[playerN]);
    } else {
      myt4uTick();
      ok4uTick();
      gr8Tick();
      gro4uTick();
      lymp4uTick();
      currentPlayer.proffession.cash += currentPlayer.proffession.cashFlow;
      fillIn(playerTrack[playerN]);
    }
  } else {
    myt4uTick();
    ok4uTick();
    gr8Tick();
    gro4uTick();
    lymp4uTick();
    turn += 1;
    turnEl.textContent = turn;
    playerN = 0;
    currentPlayer = player1;
    currentPlayer.proffession.cash += currentPlayer.proffession.cashFlow;
    fillIn(player1);
    firstTurn = false;
  }
};
let firstTurn = true;
pickJob(player1);
player1.proffession.cash = 0;
fillIn(player1);
nextBtn.addEventListener('click', function () {
  clear();
  clear();
  clear();
  if (firstTurn) {
    dice = Math.trunc(Math.random() * 12) + 1;
  }
  next();
});
let random;
const posNeg = function () {
  random = Math.trunc(Math.random() * 2) + 1;
  if (random == 1) {
    positive = false;
    negative = true;
  } else {
    positive = true;
    negative = false;
  }
};
posNeg();
/*
const tick1 = function (stockCost) {
  if (stockCost <= 15) {
    stockCost += Math.random() * 5 + 1;
    stockCost = Math.trunc(stockCost);
  } else if (stockCost > 15 && stockCost <= 30) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 5 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 2 + 1;
      stockCost = Math.trunc(stockCost);
    }
  } else if (stockCost > 30 && stockCost <= 60) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 5 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 1 + 3;
      stockCost = Math.trunc(stockCost);
    }
  } else if (stockCost > 60 && stockCost <= 30000) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 5 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 50 + 1;
      stockCost = Math.trunc(stockCost);
    }
  }
};

const tick2 = function (stockCost) {
  if (stockCost <= 7) {
    stockCost += Math.random() * 5 + 1;
    stockCost = Math.trunc(stockCost);
  } else if (stockCost > 7 && stockCost <= 15) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 8 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 5 + 1;
      stockCost = Math.trunc(stockCost);
    }
  } else if (stockCost > 15 && stockCost <= 28) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 11 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 5 + 1;
      stockCost = Math.trunc(stockCost);
    }
  } else if (stockCost > 28 && stockCost <= 45) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 9 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 8 + 1;
      stockCost = Math.trunc(stockCost);
    }
  } else if (stockCost > 45 && stockCost <= 100) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 4 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      posNeg();
      if (positive) {
        stockCost -= Math.random() * 3 + 1;
        stockCost = Math.trunc(stockCost);
      } else {
        stockCost -= Math.random() * 10 + 1;
        stockCost = Math.trunc(stockCost);
      }
    }
  }
};

const tick3 = function (stockCost) {
  if (stockCost <= 85) {
    stockCost += Math.random() * 5 + 1;
    stockCost = Math.trunc(stockCost);
  } else if (stockCost > 85 && stockCost <= 110) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 20 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 7 + 1;
      stockCost = Math.trunc(stockCost);
    }
  } else if (stockCost > 110 && stockCost <= 150) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 14 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 8 + 1;
      stockCost = Math.trunc(stockCost);
    }
  } else if (stockCost > 150 && stockCost <= 199) {
    console.log('hi');
    posNeg();
    if (positive) {
      stockCost += Math.random() * 17 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 9 + 1;
      stockCost = Math.trunc(stockCost);
    }
  } else if (stockCost > 199 && stockCost <= 900) {
    posNeg();
    if (positive) {
      stockCost += Math.random() * 5 + 1;
      stockCost = Math.trunc(stockCost);
    } else {
      stockCost -= Math.random() * 100 + 15;
      stockCost = Math.trunc(stockCost);
    }
  }
};
*/
const myt4uTick = function () {
  if (myt4uCost <= 7) {
    myt4uCost += Math.random() * 5 + 1;
    myt4uCost = Math.trunc(myt4uCost);
  } else if (myt4uCost > 7 && myt4uCost <= 15) {
    posNeg();
    if (positive) {
      myt4uCost += Math.random() * 8 + 1;
      myt4uCost = Math.trunc(myt4uCost);
    } else {
      myt4uCost -= Math.random() * 5 + 1;
      myt4uCost = Math.trunc(myt4uCost);
    }
  } else if (myt4uCost > 15 && myt4uCost <= 28) {
    posNeg();
    if (positive) {
      myt4uCost += Math.random() * 11 + 1;
      myt4uCost = Math.trunc(myt4uCost);
    } else {
      myt4uCost -= Math.random() * 5 + 1;
      myt4uCost = Math.trunc(myt4uCost);
    }
  } else if (myt4uCost > 28 && myt4uCost <= 45) {
    posNeg();
    if (positive) {
      myt4uCost += Math.random() * 9 + 3;
      myt4uCost = Math.trunc(myt4uCost);
    } else {
      myt4uCost -= Math.random() * 8 + 1;
      myt4uCost = Math.trunc(myt4uCost);
    }
  } else if (myt4uCost > 45 && myt4uCost <= 1000) {
    posNeg();
    if (positive) {
      myt4uCost += Math.random() * 4 + 1;
      myt4uCost = Math.trunc(myt4uCost);
    } else {
      posNeg();
      if (positive) {
        myt4uCost -= Math.random() * 3 + 1;
        myt4uCost = Math.trunc(myt4uCost);
      } else {
        myt4uCost -= Math.random() * 10 + 1;
        myt4uCost = Math.trunc(myt4uCost);
      }
    }
  }
};

const gro4uTick = function () {
  if (gro4uCost <= 85) {
    gro4uCost += Math.random() * 5 + 1;
    gro4uCost = Math.trunc(gro4uCost);
  } else if (gro4uCost > 85 && gro4uCost <= 110) {
    posNeg();
    if (positive) {
      gro4uCost += Math.random() * 20 + 1;
      gro4uCost = Math.trunc(gro4uCost);
    } else {
      gro4uCost -= Math.random() * 7 + 1;
      gro4uCost = Math.trunc(gro4uCost);
    }
  } else if (gro4uCost > 110 && gro4uCost <= 150) {
    posNeg();
    if (positive) {
      gro4uCost += Math.random() * 9 + 5;
      gro4uCost = Math.trunc(gro4uCost);
    } else {
      gro4uCost -= Math.random() * 6 + 2;
      gro4uCost = Math.trunc(gro4uCost);
    }
  } else if (gro4uCost > 150 && gro4uCost <= 199) {
    posNeg();
    if (positive) {
      gro4uCost += Math.random() * 13 + 4;
      gro4uCost = Math.trunc(gro4uCost);
    } else {
      gro4uCost -= Math.random() * 5 + 3;
      gro4uCost = Math.trunc(gro4uCost);
    }
  } else if (gro4uCost > 199 && gro4uCost <= 900) {
    posNeg();
    if (positive) {
      gro4uCost += Math.random() * 5 + 1;
      gro4uCost = Math.trunc(gro4uCost);
    } else {
      gro4uCost -= Math.random() * 85 + 30;
      gro4uCost = Math.trunc(gro4uCost);
    }
  }
};

const gr8Tick = function () {
  if (gr8Cost <= 15) {
    gr8Cost += Math.random() * 5 + 1;
    gr8Cost = Math.trunc(gr8Cost);
  } else if (gr8Cost > 15 && gr8Cost <= 30) {
    posNeg();
    if (positive) {
      gr8Cost += Math.random() * 5 + 3;
      gr8Cost = Math.trunc(gr8Cost);
    } else {
      gr8Cost -= Math.random() * 2 + 2;
      gr8Cost = Math.trunc(gr8Cost);
    }
  } else if (gr8Cost > 30 && gr8Cost <= 60) {
    posNeg();
    if (positive) {
      gr8Cost += Math.random() * 8 + 3;
      gr8Cost = Math.trunc(gr8Cost);
    } else {
      gr8Cost -= Math.random() * 3 + 3;
      gr8Cost = Math.trunc(gr8Cost);
    }
  } else if (gr8Cost > 60 && gr8Cost <= 30000) {
    posNeg();
    if (positive) {
      gr8Cost += Math.random() * 5 + 1;
      gr8Cost = Math.trunc(gr8Cost);
    } else {
      gr8Cost -= Math.random() * 30 + 20;
      gr8Cost = Math.trunc(gr8Cost);
    }
  }
};

const ok4uTick = function () {
  if (ok4uCost <= 17) {
    ok4uCost += Math.random() * 2 + 1;
    ok4uCost = Math.trunc(ok4uCost);
  } else if (ok4uCost > 17 && ok4uCost <= 23) {
    posNeg();
    if (positive) {
      ok4uCost += Math.random() * 4 + 2;
      ok4uCost = Math.trunc(ok4uCost);
    } else {
      ok4uCost -= Math.random() * 2 + 2;
      ok4uCost = Math.trunc(ok4uCost);
    }
  } else if (ok4uCost > 23 && ok4uCost <= 27) {
    posNeg();
    if (positive) {
      ok4uCost += Math.random() * 4 + 2;
      ok4uCost = Math.trunc(ok4uCost);
    } else {
      ok4uCost -= Math.random() * 3 + 2;
      ok4uCost = Math.trunc(ok4uCost);
    }
  } else if (ok4uCost > 27 && ok4uCost <= 40000) {
    posNeg();
    if (positive) {
      ok4uCost += Math.random() * 3 + 2;
      ok4uCost = Math.trunc(ok4uCost);
    } else {
      posNeg;
      if (positive) {
        ok4uCost -= Math.random() * 12 + 8;
        ok4uCost = Math.trunc(ok4uCost);
      } else {
        ok4uCost -= Math.random() * 5 + 3;
        ok4uCost = Math.trunc(ok4uCost);
      }
    }
  }
};

const lymp4uTick = function () {
  if (lymp4uCost <= 15) {
    lymp4uCost += Math.random() * 3 + 1;
    lymp4uCost = Math.trunc(lymp4uCost);
  } else if (lymp4uCost > 15 && lymp4uCost <= 30) {
    posNeg();
    if (positive) {
      lymp4uCost += Math.random() * 5 + 1;
      lymp4uCost = Math.trunc(lymp4uCost);
    } else {
      lymp4uCost -= Math.random() * 3 + 1;
      lymp4uCost = Math.trunc(lymp4uCost);
    }
  } else if (lymp4uCost > 30 && lymp4uCost <= 45) {
    posNeg();
    if (positive) {
      lymp4uCost += Math.random() * 8 + 1;
      lymp4uCost = Math.trunc(lymp4uCost);
    } else {
      lymp4uCost -= Math.random() * 3 + 1;
      lymp4uCost = Math.trunc(lymp4uCost);
    }
  } else if (lymp4uCost > 45 && lymp4uCost <= 60) {
    posNeg();
    if (positive) {
      lymp4uCost += Math.random() * 6 + 1;
      lymp4uCost = Math.trunc(lymp4uCost);
    } else {
      lymp4uCost -= Math.random() * 3 + 1;
      lymp4uCost = Math.trunc(lymp4uCost);
    }
  } else if (lymp4uCost > 60 && lymp4uCost <= 10000) {
    posNeg();
    if (positive) {
      lymp4uCost += Math.random() * 8 + 1;
      lymp4uCost = Math.trunc(lymp4uCost);
    } else {
      posNeg();
      if (positive) {
        lymp4uCost -= Math.random() * 3 + 1;
        lymp4uCost = Math.trunc(lymp4uCost);
      } else {
        lymp4uCost -= Math.random() * 20 + 10;
        lymp4uCost = Math.trunc(lymp4uCost);
      }
    }
  }
};

const pickStock = function () {
  let pick = Math.trunc(Math.random() * 5 + 1);
  if (pick == 1) {
    tick1(myt4uCost);
  } else if (pick == 2) {
    tick1(ok4uCost);
  } else if (pick == 3) {
    tick1(gro4uCost);
  } else if (pick == 4) {
    tick1(gr8Cost);
  } else if (pick == 5) {
    tick1(lymp4uCost);
  }
  pick = Math.trunc(Math.random() * 5 + 1);
  if (pick == 1) {
    tick2(myt4uCost);
  } else if (pick == 2) {
    tick2(ok4uCost);
  } else if (pick == 3) {
    tick2(gro4uCost);
  } else if (pick == 4) {
    tick2(gr8Cost);
  } else if (pick == 5) {
    tick2(lymp4uCost);
  }

  pick = Math.trunc(Math.random() * 5 + 1);
  if (pick == 1) {
    tick3(myt4uCost);
  } else if (pick == 2) {
    tick3(ok4uCost);
  } else if (pick == 3) {
    tick3(gro4uCost);
  } else if (pick == 4) {
    tick3(gr8Cost);
  } else if (pick == 5) {
    tick3(lymp4uCost);
  }

  /*
  pick = Math.trunc(Math.random() * 5 + 1);
  if (pick == 1) {
  } else if (pick == 2) {
   
  } else if (pick == 3) {
  } else if (pick == 4) {
  } else if (pick == 5) {
    
  }
  pick = Math.trunc(Math.random() * 5 + 1);
  if (pick == 1) {
    
  } else if (pick == 5) {
    
  } else if (pick == 3) {
    
  } else if (pick == 4) {
    
  } else if (pick == 5) {
    
  }
*/
};
