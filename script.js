//Player Count
let players;
const playerCount = function () {
  players = Number(prompt('How many Players? (2-8)'));
  if (players > 8 || players < 2) {
    playerCount();
  }
};
playerCount();
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
let random;
//comment
//Variables

//Elemens
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
let myt4uRangeEl = document.querySelector('.myt4uRange');
let gr8RangeEl = document.querySelector('.gr8Range');
let gro4uRangeEl = document.querySelector('.gro4uRange');
let ok4uRangeEl = document.querySelector('.ok4uRange');
let lymp4uRangeEl = document.querySelector('.lymp4uRange');
let okButton = document.querySelector('.ok');
let btn50 = document.querySelector('.fifty');
let btn100 = document.querySelector('.hundred');
let btn500 = document.querySelector('.five--hundred');
let btn1000 = document.querySelector('.one--thousand');
let btn5000 = document.querySelector('.five--thousand');
let maxBtn = document.querySelector('.max');
let bellEl = document.querySelector('.bell');
let turnEl = document.querySelector('.turn');
let cashEl = document.querySelector('.cash');
let nextBtn = document.querySelector('.next');
let myt4uCostEl = document.querySelector('.myt4u--cost');
let gro4uCostEl = document.querySelector('.gro4u--cost');
let gr8CostEl = document.querySelector('.gr8--cost');
let ok4uCostEl = document.querySelector('.ok4u--cost');
let lymp4uCostEl = document.querySelector('.lymp4u--cost');
let myt4uboughtEl = document.querySelector('.myt4uBuyPrice');
let ok4uboughtEl = document.querySelector('.ok4uBuyPrice');
let gr8boughtEl = document.querySelector('.gr8BuyPrice');
let gro4uboughtEl = document.querySelector('.gro4uBuyPrice');
let lymp4uboughtEl = document.querySelector('.lymp4uBuyPrice');
let loanBtn = document.querySelector('.loan');
let loanEl = document.querySelector('.currentLoan');
let okLoan = document.querySelector('.okLoan');
let loanValue = document.querySelector('.loanN');
let paybackLoan = document.querySelector('.paybackLoan');
paybackLoan.classList.add('hidden');

let housesBusinessEl = document.querySelector('.house');
let houseBusinessYes = document.querySelector('.yes');
let houseBusinessNo = document.querySelector('.no');
houseBusinessNo.classList.add('hidden');
houseBusinessYes.classList.add('hidden');
housesBusinessEl.textContent =
  ' There are no houses to buy and no businesses to claim';
let currentSell = ' There are no houses to buy and no businesses to claim';

let houseSell1 = document.querySelector('.realBusiness1Sell');
let houseSell2 = document.querySelector('.realBusiness2Sell');
let houseSell3 = document.querySelector('.realBusiness3Sell');
let houseSell4 = document.querySelector('.realBusiness4Sell');
let houseSell5 = document.querySelector('.realBusiness5Sell');
let houseSell6 = document.querySelector('.realBusiness6Sell');
houseSell1.classList.add('hidden');
houseSell2.classList.add('hidden');
houseSell3.classList.add('hidden');
houseSell4.classList.add('hidden');
houseSell5.classList.add('hidden');
houseSell6.classList.add('hidden');

let jewelryEl = document.querySelector('.jewelry');
let boatEl = document.querySelector('.boat');
let tvEl = document.querySelector('.tv');
let fishingRodEl = document.querySelector('.rod');
let merchEl = document.querySelector('.merch');
let bowlingBallEl = document.querySelector('.bowlingBall');
let watchEl = document.querySelector('.watch');
let clothingEl = document.querySelector('.clothing');
let furnitureEl = document.querySelector('.furniture');
let nintendoSwitchEl = document.querySelector('.switch');
let mowerEl = document.querySelector('.mower');
//Booleans
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
let myt4uPick = false;
let ok4uPick = false;
let gr8Pick = false;
let gro4uPick = false;
let lymp4uPick = false;
let buying = false;
let selling = false;
let buyOpen = false;
let sellOpen = false;
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

//Dice
let dice = Math.trunc(Math.random() * 12) + 1;

//Adding Classlists
btn50.classList.add('hidden');
btn100.classList.add('hidden');
btn500.classList.add('hidden');
btn1000.classList.add('hidden');
btn5000.classList.add('hidden');
maxBtn.classList.add('hidden');

//Number Declares
let turn = 1;
turnEl.textContent = turn;

const myt4u = {
  stock: 0,
};

const ok4u = {
  stock: 0,
};
const gr8 = {
  stock: 0,
};
const gro4u = {
  stock: 0,
};
const lymp4u = {
  stock: 0,
};
let pick = 0;
let lowRange = Math.trunc(Math.random() * 30 + 5);
highRange = Math.trunc(Math.random() * 50 + 50);
const setRange = function () {
  lowRange = Math.trunc(Math.random() * 30 + 5);
  highRange = Math.trunc(Math.random() * 50 + 50);
};
const stock1 = {
  lowRange: lowRange,
  highRange: highRange,
  second: Math.trunc(highRange / 4.5) + lowRange - 5,
  third: Math.trunc(highRange / 2.5) + lowRange - 5,
  fourth: Math.trunc(highRange / 1.5) + lowRange - 5,
};
lowRange = Math.trunc(Math.random() * 30 + 5);
highRange = Math.trunc(Math.random() * 50 + 30);

const stock2 = {
  lowRange: lowRange,
  highRange: highRange,
  second: Math.trunc(highRange / 4.5) + lowRange - 5,
  third: Math.trunc(highRange / 2.5) + lowRange - 5,
  fourth: Math.trunc(highRange / 1.5) + lowRange - 5,
};
lowRange = Math.trunc(Math.random() * 35 + 10);
highRange = Math.trunc(Math.random() * 210 + 20);
const stock3 = {
  lowRange: lowRange,
  highRange: highRange,
  second: Math.trunc(highRange / 4.5) + lowRange - 5,
  third: Math.trunc(highRange / 2.5) + lowRange - 5,
  fourth: Math.trunc(highRange / 1.5) + lowRange - 5,
};
lowRange = Math.trunc(Math.random() * 35 + 10);
highRange = Math.trunc(Math.random() * 120 + 50);
const stock4 = {
  lowRange: lowRange,
  highRange: highRange,
  second: Math.trunc(highRange / 4.5) + lowRange - 5,
  third: Math.trunc(highRange / 2.5) + lowRange - 5,
  fourth: Math.trunc(highRange / 1.5) + lowRange - 5,
};
lowRange = Math.trunc(Math.random() * 35 + 10);
highRange = Math.trunc(Math.random() * 150 + 50);
const stock5 = {
  lowRange: lowRange,
  highRange: highRange,
  second: Math.trunc(highRange / 4.5) + lowRange - 5,
  third: Math.trunc(highRange / 2.5) + lowRange - 5,
  fourth: Math.trunc(highRange / 1.5) + lowRange - 5,
};
const pickStock1 = function () {
  pick = Math.trunc(Math.random() * 5 + 1);
  if (pick == 1 && !myt4uPick) {
    myt4u.stock = stock1;
    myt4uPick = true;
  } else if (pick == 2 && !gro4uPick) {
    gro4u.stock = stock1;
    gro4uPick = true;
  } else if (pick == 3 && !gr8Pick) {
    gr8.stock = stock1;
    gr8Pick = true;
  } else if (pick == 4 && !ok4uPick) {
    ok4u.stock = stock1;
    ok4uPick = true;
  } else if (pick == 5 && !lymp4uPick) {
    lymp4u.stock = stock1;
    lymp4uPick = true;
  }
};
const pickStock2 = function () {
  pick = Math.trunc(Math.random() * 5 + 1);
  if (pick == 1 && !myt4uPick) {
    myt4u.stock = stock2;
    myt4uPick = true;
  } else if (pick == 2 && !gro4uPick) {
    gro4u.stock = stock2;
    gro4uPick = true;
  } else if (pick == 3 && !gr8Pick) {
    gr8.stock = stock2;
    gr8Pick = true;
  } else if (pick == 4 && !ok4uPick) {
    ok4u.stock = stock2;
    ok4uPick = true;
  } else if (pick == 5 && !lymp4uPick) {
    lymp4u.stock = stock2;
    lymp4uPick = true;
  } else {
    pickStock2();
    console.log('try again');
  }
};
const pickStock3 = function () {
  pick = Math.trunc(Math.random() * 5 + 1);
  if (pick == 1 && !myt4uPick) {
    myt4u.stock = stock3;
    myt4uPick = true;
  } else if (pick == 2 && !gro4uPick) {
    gro4u.stock = stock3;
    gro4uPick = true;
  } else if (pick == 3 && !gr8Pick) {
    gr8.stock = stock3;
    gr8Pick = true;
  } else if (pick == 4 && !ok4uPick) {
    ok4u.stock = stock3;
    ok4uPick = true;
  } else if (pick == 5 && !lymp4uPick) {
    lymp4u.stock = stock3;
    lymp4uPick = true;
  } else {
    pickStock3();
    console.log('try again');
  }
};

const pickStock4 = function () {
  pick = Math.trunc(Math.random() * 5 + 1);
  if (pick == 1 && !myt4uPick) {
    myt4u.stock = stock4;
    myt4uPick = true;
  } else if (pick == 2 && !gro4uPick) {
    gro4u.stock = stock4;
    gro4uPick = true;
  } else if (pick == 3 && !gr8Pick) {
    gr8.stock = stock4;
    gr8Pick = true;
  } else if (pick == 4 && !ok4uPick) {
    ok4u.stock = stock4;
    ok4uPick = true;
  } else if (pick == 5 && !lymp4uPick) {
    lymp4u.stock = stock4;
    lymp4uPick = true;
  } else {
    pickStock4();
    console.log('try again');
  }
};
const pickStock5 = function () {
  if (!myt4uPick) {
    myt4u.stock = stock5;
    myt4uPick = true;
  } else if (!gro4uPick) {
    gro4u.stock = stock5;
    gro4uPick = true;
  } else if (!gr8Pick) {
    gr8.stock = stock5;
    gr8Pick = true;
  } else if (!ok4uPick) {
    ok4u.stock = stock5;
    ok4uPick = true;
  } else if (!lymp4uPick) {
    lymp4u.stock = stock5;
    lymp4uPick = true;
  }
};
pickStock1();
pickStock2();
pickStock3();
pickStock4();
pickStock5();
myt4uCost =
  Math.trunc(Math.random() * myt4u.stock.highRange) + myt4u.stock.lowRange;
myt4uCostEl.textContent = myt4uCost;
gro4uCost =
  Math.trunc(Math.random() * gro4u.stock.highRange) + gro4u.stock.lowRange;
gro4uCostEl.textContent = gro4uCost;
gr8Cost = Math.trunc(Math.random() * gr8.stock.highRange) + gr8.stock.lowRange;
gr8CostEl.textContent = gr8Cost;
ok4uCost =
  Math.trunc(Math.random() * ok4u.stock.highRange) + ok4u.stock.lowRange;
ok4uCostEl.textContent = ok4uCost;
lymp4uCost =
  Math.trunc(Math.random() * lymp4u.stock.highRange) + lymp4u.stock.lowRange;
lymp4uCostEl.textContent = lymp4uCost;
ok4uCostEl.textContent = ok4uCost;
//Modal/ Doodad
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
modal.classList.add('hidden');
overlay.classList.add('hidden');
okButton.classList.add('hidden');
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
let d = 1;
const Player = function () {
  (this.number = d),
    (this.proffession = 'homeless'),
    (this.myt4uCost = []),
    (this.gro4uCost = []),
    (this.gr8Cost = []),
    (this.ok4uCost = []),
    (this.lymp4uCost = []),
    (this.myt4uStock = []),
    (this.gro4uStock = []),
    (this.ok4uStock = []),
    (this.gr8Stock = []),
    (this.lymp4uStock = []),
    (this.myt4uAverage = 0),
    (this.ok4uAverage = 0),
    (this.gro4uAverage = 0),
    (this.gr8Average = 0),
    (this.lymp4uAverage = 0),
    (this.currentLoan = 0);
  (this.assets = 0),
    (this.realBusiness1 = 0),
    (this.realBusiness2 = 0),
    (this.realBusiness3 = 0),
    (this.realBusiness4 = 0),
    (this.realBusiness5 = 0),
    (this.realBusiness6 = 0),
    (this.passive = 0),
    (this.watch = 0),
    (this.nintendoSwitch = 0),
    (this.fishingRod = 0),
    (this.furniture = 0),
    (this.lawnMower = 0),
    (this.merch = 0),
    (this.tv = 0),
    (this.boat = 0),
    (this.jewelry = 0),
    (this.bowlingBall = 0),
    (d += 1);
};
const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();
const player5 = new Player();
const player6 = new Player();
const player7 = new Player();

const player8 = new Player();

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

const doodad1 = {
  doodad: 'Your car broke down',
  doodadCost: 1500,
};
const doodad2 = {
  doodad: 'You Decide to take your family to a nice dinner',
  doodadCost: 200,
};
const doodad3 = {
  doodad: 'Your friend bets 1000 you cant juggle, you lose the bet',
  doodadCost: 1000,
};
const doodad4 = {
  doodad: 'As you drive home you buy some lemonade from some kids',
  doodadCost: 30,
};
const doodad5 = {
  doodad: 'You buy some expensive jewelry',
  doodadCost: 700,
};
const doodad6 = {
  doodad: 'Your water heater leaks',
  doodadCost: 800,
};
const doodad7 = {
  doodad: 'New Boat',
  doodadCost: 8000,
};
const doodad8 = {
  doodad: 'Park in handicap zone',
  doodadCost: 100,
};
const doodad9 = {
  doodad: 'Big Screen TV',
  doodadCost: 4000,
};
const doodad10 = {
  doodad: 'Pay Admission to a sporting event',
  doodadCost: 15,
};
const doodad11 = {
  doodad: 'Pay admission to a sporting event',
  doodadCost: 50,
};
const doodad12 = {
  doodad: 'Pay admission to a sporting event',
  doodadCost: 150,
};
const doodad13 = {
  doodad: 'Pay admission to a sporting event',
  doodadCost: 1000,
};
const doodad14 = {
  doodad: 'Buy New Fishing Rod!',
  doodadCost: 100,
};
const doodad15 = {
  doodad: 'Cars air conditioning dies',
  doodadCost: 600,
};
const doodad16 = {
  doodad: 'Pay Taxes',
  doodadCost: currentPlayer.proffession.cashFlow * 4,
};
const doodad17 = {
  doodad: 'Enter a 5k',
  doodadCost: 35,
};
const doodad18 = {
  doodad: 'Go to a casino',
  doodadCost:
    currentPlayer.proffession.cashFlow * Math.trunc(Math.random() * 12) + 1,
};
const doodad19 = {
  doodad: 'Family Vacation!',
  doodadCost: currentPlayer.proffession.cashFlow * 6,
};
const doodad20 = {
  doodad: 'New Clothing',
  doodadCost: Math.trunc(currentPlayer.proffession.cashFlow * 1.4),
};
const doodad21 = {
  doodad: 'Signed Mr beast team shirt',
  doodadCost: 600,
};
const doodad22 = {
  doodad: 'Get a New bowling ball',
  doodadCost: currentPlayer.proffession.cashFlow * 4,
};
const doodad23 = {
  doodad: 'Buy new lawn mower',
  doodadCost: 300,
};
const doodad24 = {
  doodad: 'Buy a new watch',
  doodadCost: currentPlayer.proffession.cashFlow * 3,
};
const doodad25 = {
  doodad: 'Give Money to charity',
  doodadCost: currentPlayer.proffession.cashFlow * 10,
};
const doodad26 = {
  doodad: 'Lost Wallet',
  doodadCost: Math.trunc(currentPlayer.proffession.cashFlow * 1.5),
};
const doodad27 = {
  doodad: 'No Doodad this month',
  doodadCost: 0,
};
const doodad28 = {
  doodad: 'Fined for speeding',
  doodadCost: 120,
};
const doodad29 = {
  doodad: 'Visit Dentist',
  doodadCost: currentPlayer.proffession.cashFlow * 2,
};
const doodad30 = {
  doodad: 'Buy Furniture',
  doodadCost: 300,
};
const doodad31 = {
  doodad: 'Go to a concert in vip',
  doodadCost: 300,
};
const doodad32 = {
  doodad: 'Get Scammed Online',
  doodadCost: currentPlayer.proffession.cashFlow * 8,
};
const doodad33 = {
  doodad: 'Enter a video game tournament',
  doodadCost: Math.trunc(currentPlayer.proffession.cashFlow * 0.5),
};
const doodad34 = {
  doodad: 'Buy a signed nintendo switch',
  doodadCost: currentPlayer.proffession.cashFlow * 5,
};
const doodad35 = {
  doodad: 'No doodad this month',
  doodadCost: 0,
};
const doodad36 = {
  doodad: 'No doodad this month',
  doodadCost: 0,
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
  cashEl.textContent = player.proffession.cash;
  myt4uCostEl.textContent = myt4uCost;
  gro4uCostEl.textContent = gro4uCost;
  gr8CostEl.textContent = gr8Cost;
  ok4uCostEl.textContent = ok4uCost;
  lymp4uCostEl.textContent = lymp4uCost;
  myt4uRangeEl.textContent =
    '$' +
    myt4u.stock.lowRange.toString() +
    ' - $' +
    myt4u.stock.highRange.toString();
  ok4uRangeEl.textContent =
    '$' +
    ok4u.stock.lowRange.toString() +
    ' - $' +
    ok4u.stock.highRange.toString();
  gr8RangeEl.textContent =
    '$' +
    gr8.stock.lowRange.toString() +
    ' - $' +
    gr8.stock.highRange.toString();
  gro4uRangeEl.textContent =
    '$' +
    gro4u.stock.lowRange.toString() +
    ' - $' +
    gro4u.stock.highRange.toString();
  lymp4uRangeEl.textContent =
    '$' +
    lymp4u.stock.lowRange.toString() +
    ' - $' +
    lymp4u.stock.highRange.toString();
  myt4uboughtEl.textContent = player.myt4uAverage;
  ok4uboughtEl.textContent = player.ok4uAverage;
  gro4uboughtEl.textContent = player.gro4uAverage;
  lymp4uboughtEl.textContent = player.lymp4uAverage;
  gr8boughtEl.textContent = player.gr8Average;
  loanEl.textContent = player.currentLoan;
  housesBusinessEl.textContent = currentSell;
  passiveEl.textContent = player.passive;

  watchEl.textContent = player.watch;
  nintendoSwitchEl.textContent = player.nintendoSwitch;
  fishingRodEl.textContent = player.fishingRod;
  furnitureEl.textContent = player.furniture;
  mowerEl.textContent = player.lawnMower;
  merchEl.textContent = player.merch;
  tvEl.textContent = player.tv;
  boatEl.textContent = player.boat;
  jewelryEl.textContent = player.jewelry;
  bowlingBallEl.textContent = player.bowlingBall;
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
    currentPlayer.myt4uStock.push(Number(bellEl.value));
    currentPlayer.myt4uCost.push(myt4uCost);
    currentPlayer.myt4uAverage = stockAverage(
      currentPlayer.myt4uAverage,
      currentPlayer.myt4uStock,
      currentPlayer.myt4uCost
    );
    myt4uboughtEl.textContent = currentPlayer.myt4uAverage;
    currentPlayer.proffession.myt4u += Number(bellEl.value);
    currentPlayer.proffession.cash -= Number(bellEl.value) * myt4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    myt4uEl.textContent = currentPlayer.proffession.myt4u;
  }

  if (sellingMyt4u) {
    if (currentPlayer.proffession.myt4u >= Number(bellEl.value)) {
      currentPlayer.myt4uStock = stockArr(currentPlayer.myt4uStock);
      currentPlayer.myt4uCost.length = currentPlayer.myt4uStock.length;
      currentPlayer.myt4uAverage = stockAverage(
        currentPlayer.myt4uAverage,
        currentPlayer.myt4uStock,
        currentPlayer.myt4uCost
      );
      myt4uboughtEl.textContent = currentPlayer.myt4uAverage;
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
    currentPlayer.ok4uStock.push(Number(bellEl.value));
    currentPlayer.ok4uCost.push(ok4uCost);
    currentPlayer.ok4uAverage = stockAverage(
      currentPlayer.ok4uAverage,
      currentPlayer.ok4uStock,
      currentPlayer.ok4uCost
    );
    ok4uboughtEl.textContent = currentPlayer.ok4uAverage;
    currentPlayer.proffession.ok4u += Number(bellEl.value);
    currentPlayer.proffession.cash -= Number(bellEl.value) * ok4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    ok4uEl.textContent = currentPlayer.proffession.ok4u;
  }

  if (sellingOk4u && currentPlayer.proffession.ok4u >= Number(bellEl.value)) {
    currentPlayer.ok4uStock = stockArr(currentPlayer.ok4uStock);
    currentPlayer.ok4uCost.length = currentPlayer.ok4uStock.length;
    currentPlayer.ok4uAverage = stockAverage(
      currentPlayer.ok4uAverage,
      currentPlayer.ok4uStock,
      currentPlayer.ok4uCost
    );
    ok4uboughtEl.textContent = currentPlayer.ok4uAverage;
    currentPlayer.proffession.ok4u -= Number(bellEl.value);
    currentPlayer.proffession.cash += Number(bellEl.value) * ok4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    ok4uEl.textContent = currentPlayer.proffession.ok4u;
  }

  if (
    buyingGro4u &&
    Number(bellEl.value) * gro4uCost <= currentPlayer.proffession.cash
  ) {
    currentPlayer.gro4uStock.push(Number(bellEl.value));
    currentPlayer.gro4uCost.push(gro4uCost);
    currentPlayer.gro4uAverage = stockAverage(
      currentPlayer.gro4uAverage,
      currentPlayer.gro4uStock,
      currentPlayer.gro4uCost
    );
    gro4uboughtEl.textContent = currentPlayer.gro4uAverage;
    currentPlayer.proffession.gro4u += Number(bellEl.value);
    currentPlayer.proffession.cash -= Number(bellEl.value) * gro4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    gro4uEl.textContent = currentPlayer.proffession.gro4u;
  }

  if (sellingGro4u && currentPlayer.proffession.gro4u >= Number(bellEl.value)) {
    currentPlayer.gro4uStock = stockArr(currentPlayer.gro4uStock);
    currentPlayer.gro4uCost.length = currentPlayer.gro4uStock.length;
    currentPlayer.gro4uAverage = stockAverage(
      currentPlayer.gro4uAverage,
      currentPlayer.gro4uStock,
      currentPlayer.gro4uCost
    );
    gro4uboughtEl.textContent = currentPlayer.gro4uAverage;
    currentPlayer.proffession.gro4u -= Number(bellEl.value);
    currentPlayer.proffession.cash += Number(bellEl.value) * gro4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    gro4uEl.textContent = currentPlayer.proffession.gro4u;
  }
  if (sellingGr8 && currentPlayer.proffession.gr8 >= Number(bellEl.value)) {
    currentPlayer.gr8Stock = stockArr(currentPlayer.gr8Stock);
    currentPlayer.gr8Cost.length = currentPlayer.gr8Stock.length;
    currentPlayer.gr8Average = stockAverage(
      currentPlayer.gr8Average,
      currentPlayer.gr8Stock,
      currentPlayer.gr8Cost
    );
    gr8boughtEl.textContent = currentPlayer.gr8Average;
    currentPlayer.proffession.gr8 -= Number(bellEl.value);
    currentPlayer.proffession.cash += Number(bellEl.value) * gr8Cost;
    cashEl.textContent = currentPlayer.proffession.cash;
    gr8El.textContent = currentPlayer.proffession.gr8;
  }
  if (
    buyingGr8 &&
    Number(bellEl.value) * gr8Cost <= currentPlayer.proffession.cash
  ) {
    currentPlayer.gr8Stock.push(Number(bellEl.value));
    currentPlayer.gr8Cost.push(gr8Cost);
    currentPlayer.gr8Average = stockAverage(
      currentPlayer.gr8Average,
      currentPlayer.gr8Stock,
      currentPlayer.gr8Cost
    );
    gr8boughtEl.textContent = currentPlayer.gr8Average;
    currentPlayer.proffession.gr8 += Number(bellEl.value);
    currentPlayer.proffession.cash -= Number(bellEl.value) * gr8Cost;
    cashEl.textContent = currentPlayer.proffession.cash;
    gr8El.textContent = currentPlayer.proffession.gr8;
  }
  if (
    buyingLymp4u &&
    Number(bellEl.value) * lymp4uCost <= currentPlayer.proffession.cash
  ) {
    currentPlayer.lymp4uStock.push(Number(bellEl.value));
    currentPlayer.lymp4uCost.push(lymp4uCost);
    currentPlayer.lymp4uAverage = stockAverage(
      currentPlayer.lymp4uAverage,
      currentPlayer.lymp4uStock,
      currentPlayer.lymp4uCost
    );
    lymp4uboughtEl.textContent = currentPlayer.lymp4uAverage;
    currentPlayer.proffession.lymp4u += Number(bellEl.value);
    currentPlayer.proffession.cash -= Number(bellEl.value) * lymp4uCost;
    cashEl.textContent = currentPlayer.proffession.cash;
    lymp4uEl.textContent = currentPlayer.proffession.lymp4u;
  }
  if (
    sellingLymp4u &&
    currentPlayer.proffession.lymp4u >= Number(bellEl.value)
  ) {
    currentPlayer.lymp4uStock = stockArr(currentPlayer.lymp4uStock);
    currentPlayer.lymp4uCost.length = currentPlayer.lymp4uStock.length;
    currentPlayer.lymp4uAverage = stockAverage(
      currentPlayer.lymp4uAverage,
      currentPlayer.lymp4uStock,
      currentPlayer.lymp4uCost
    );
    lymp4uboughtEl.textContent = currentPlayer.lymp4uAverage;
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
maxBtn.addEventListener('click', function () {
  if (buyingMyt4u) {
    bellEl.value = Math.trunc(currentPlayer.proffession.cash / myt4uCost);
  } else if (buyingGr8) {
    bellEl.value = Math.trunc(currentPlayer.proffession.cash / gr8Cost);
  } else if (buyingGro4u) {
    bellEl.value = Math.trunc(currentPlayer.proffession.cash / gro4uCost);
  } else if (buyingOk4u) {
    bellEl.value = Math.trunc(currentPlayer.proffession.cash / ok4uCost);
  } else if (buyingLymp4u) {
    bellEl.value = Math.trunc(currentPlayer.proffession.cash / lymp4uCost);
  } else if (sellingMyt4u) {
    bellEl.value = currentPlayer.proffession.myt4u;
  } else if (sellingOk4u) {
    bellEl.value = currentPlayer.proffession.ok4u;
  } else if (sellingGro4u) {
    bellEl.value = currentPlayer.proffession.gro4u;
  } else if (sellingGr8) {
    bellEl.value = currentPlayer.proffession.gr8;
  } else if (sellingLymp4u) {
    bellEl.value = currentPlayer.proffession.lymp4u;
  }
});

okButton.addEventListener('click', function () {
  okBtn();
  btn50.classList.add('hidden');
  btn100.classList.add('hidden');
  btn500.classList.add('hidden');
  btn1000.classList.add('hidden');
  btn5000.classList.add('hidden');
  maxBtn.classList.add('hidden');
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
    maxBtn.classList.remove('hidden');
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
    maxBtn.classList.add('hidden');
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
    maxBtn.classList.remove('hidden');
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
    maxBtn.classList.add('hidden');
  }
};

sellMyt4uEl.addEventListener('click', function () {
  buyingMyt4u = false;
  buyingGr8 = false;
  buyingGro4u = false;
  buyingOk4u = false;
  buyingLymp4u = false;

  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;

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
  buyingGr8 = false;
  buyingGro4u = false;
  buyingOk4u = false;
  buyingLymp4u = false;

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

  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;

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

  buyingMyt4u = false;
  buyingGr8 = false;

  buyingOk4u = false;
  buyingLymp4u = false;

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

  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;

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

  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;
  sellingLymp4u = false;

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

  buyingMyt4u = false;

  buyingGro4u = false;
  buyingOk4u = false;
  buyingLymp4u = false;

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

  buyingMyt4u = false;
  buyingGr8 = false;
  buyingGro4u = false;
  buyingOk4u = false;

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
  sellingMyt4u = false;
  sellingGr8 = false;
  sellingGro4u = false;
  sellingOk4u = false;

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
  buyingMyt4u = false;
  buyingGr8 = false;
  buyingGro4u = false;

  buyingLymp4u = false;

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
let interest = 0.2;
let totalStock =
  currentPlayer.proffession.myt4u +
  currentPlayer.proffession.gro4u +
  currentPlayer.proffession.gr8 +
  currentPlayer.proffession.lymp4u +
  currentPlayer.proffession.ok4u;
okLoan.addEventListener('click', function () {
  okLoan.classList.add('hidden');
  loanValue.classList.add('hidden');
  if (
    getting &&
    totalStock * 1000 + 10000 >= parseInt(loanValue.value) &&
    parseInt(loanValue.value) > 0
  ) {
    currentPlayer.currentLoan += parseInt(loanValue.value);
    currentPlayer.proffession.totalExpenses += Math.round(
      parseInt(loanValue.value) * interest
    );
    currentPlayer.proffession.cashFlow -= Math.round(
      parseInt(loanValue.value) * interest
    );
    currentPlayer.proffession.cash += parseInt(loanValue.value);
    if (currentPlayer.currentLoan > 0) {
      paybackLoan.classList.remove('hidden');
    }
  } else if (
    paying &&
    parseInt(loanValue.value) <= currentPlayer.proffession.cash &&
    currentPlayer.currentLoan >= parseInt(loanValue.value)
  ) {
    currentPlayer.currentLoan -= parseInt(loanValue.value);
    currentPlayer.proffession.totalExpenses -= Math.round(
      parseInt(loanValue.value) * interest
    );
    currentPlayer.proffession.cashFlow += Math.round(
      parseInt(loanValue.value) * interest
    );
    Math.round(currentPlayer.proffession.cashFlow);
    currentPlayer.proffession.cash -= parseInt(loanValue.value);
    if (currentPlayer.currentLoan == 0) {
      paybackLoan.classList.add('hidden');
    }
  }
  fillIn(currentPlayer);
  getting = false;
  paying = false;
});
let getting = false;
let paying = false;
loanBtn.addEventListener('click', function () {
  totalStock =
    currentPlayer.proffession.myt4u +
    currentPlayer.proffession.gro4u +
    currentPlayer.proffession.gr8 +
    currentPlayer.proffession.lymp4u +
    currentPlayer.proffession.ok4u;
  if (!firstTurn && !getting) {
    loanValue.value = '';
    getting = true;
    paying = false;
    okLoan.classList.toggle('hidden');
    loanValue.classList.toggle('hidden');
  } else if (!firstTurn) {
    getting = false;
    paying = false;
    okLoan.classList.toggle('hidden');
    loanValue.classList.toggle('hidden');
  }
});

paybackLoan.addEventListener('click', function () {
  if (!firstTurn && !paying) {
    loanValue.value = '';
    paying = true;
    getting = false;
    okLoan.classList.toggle('hidden');
    loanValue.classList.toggle('hidden');
  } else {
    paying = false;
    getting = false;
    okLoan.classList.toggle('hidden');
    loanValue.classList.toggle('hidden');
  }
});

houseBusinessNo.addEventListener('click', function () {
  currentSell = ' There are no houses to buy and no businesses to claim';
  houseBusinessNo.classList.add('hidden');
  houseBusinessYes.classList.add('hidden');
  fillIn(currentPlayer);
});

houseBusinessYes.addEventListener('click', function () {
  if (currentPlayer.proffession.cash >= currentAsset.cost) {
    houseBusinessNo.classList.add('hidden');
    houseBusinessYes.classList.add('hidden');
    if (currentPlayer.realBusiness1 == 0) {
      currentPlayer.proffession.cash -= currentAsset.cost;
      currentPlayer.proffession.realBusiness1 =
        currentAsset.type +
        ' Sell for: ' +
        currentAsset.cost +
        ' Max Cashflow: ' +
        currentAsset.maxCashflow;
      currentPlayer.realBusiness1 = currentAsset;
      houseSell1.classList.remove('hidden');
      currentPlayer.assets = 1;
    } else if (currentPlayer.realBusiness2 == 0) {
      currentPlayer.proffession.cash -= currentAsset.cost;
      currentPlayer.proffession.realBusiness2 =
        currentAsset.type +
        ' Sell for: ' +
        currentAsset.cost +
        ' Max Cashflow: ' +
        currentAsset.maxCashflow;
      currentPlayer.realBusiness2 = currentAsset;
      houseSell2.classList.remove('hidden');
      currentPlayer.assets = 2;
    } else if (currentPlayer.realBusiness3 == 0) {
      currentPlayer.proffession.cash -= currentAsset.cost;
      currentPlayer.proffession.realBusiness3 =
        currentAsset.type +
        ' Sell for: ' +
        currentAsset.cost +
        ' Max Cashflow: ' +
        currentAsset.maxCashflow;
      currentPlayer.realBusiness3 = currentAsset;
      houseSell3.classList.remove('hidden');
      currentPlayer.assets = 3;
    } else if (currentPlayer.realBusiness4 == 0) {
      currentPlayer.proffession.cash -= currentAsset.cost;
      currentPlayer.proffession.realBusiness4 =
        currentAsset.type +
        ' Sell for: ' +
        currentAsset.cost +
        ' Max Cashflow: ' +
        currentAsset.maxCashflow;
      currentPlayer.realBusiness4 = currentAsset;
      houseSell4.classList.remove('hidden');
      currentPlayer.assets = 4;
    } else if (currentPlayer.realBusiness5 == 0) {
      currentPlayer.proffession.cash -= currentAsset.cost;
      currentPlayer.proffession.realBusiness5 =
        currentAsset.type +
        ' Sell for: ' +
        currentAsset.cost +
        ' Max Cashflow: ' +
        currentAsset.maxCashflow;
      currentPlayer.realBusiness5 = currentAsset;
      houseSell5.classList.remove('hidden');
      currentPlayer.assets = 5;
    } else if (currentPlayer.realBusiness6 == 0) {
      currentPlayer.proffession.cash -= currentAsset.cost;
      currentPlayer.proffession.realBusiness6 =
        currentAsset.type +
        ' Sell for: ' +
        currentAsset.cost +
        ' Max Cashflow: ' +
        currentAsset.maxCashflow;
      currentPlayer.realBusiness6 = currentAsset;
      houseSell6.classList.remove('hidden');
      currentPlayer.assets = 6;
    }
    currentSell = ' There are no houses to buy and no businesses to claim';
    fillIn(currentPlayer);
  }

  fillIn(currentPlayer);
});

houseSell1.addEventListener('click', function () {
  currentPlayer.proffession.cash += currentPlayer.realBusiness1.cost;
  currentPlayer.proffession.cashFlow -= currentPlayer.realBusiness1.cashflow;
  houseSell1.classList.add('hidden');
  currentPlayer.passive -= currentPlayer.realBusiness1.cashflow;
  currentPlayer.proffession.realBusiness1 = 0;
  currentPlayer.realBusiness1 = 0;
  fillIn(currentPlayer);
});
houseSell2.addEventListener('click', function () {
  currentPlayer.proffession.cash += currentPlayer.realBusiness2.cost;
  currentPlayer.proffession.cashFlow -= currentPlayer.realBusiness2.cashflow;
  houseSell2.classList.add('hidden');
  currentPlayer.passive -= currentPlayer.realBusiness2.cashflow;
  currentPlayer.proffession.realBusiness2 = 0;
  currentPlayer.realBusiness2 = 0;
  fillIn(currentPlayer);
});
houseSell3.addEventListener('click', function () {
  currentPlayer.proffession.cash += currentPlayer.realBusiness3.cost;
  currentPlayer.proffession.cashFlow -= currentPlayer.realBusiness3.cashflow;
  houseSell3.classList.add('hidden');
  currentPlayer.passive -= currentPlayer.realBusiness3.cashflow;
  currentPlayer.proffession.realBusiness3 = 0;
  currentPlayer.realBusiness3 = 0;
  fillIn(currentPlayer);
});
houseSell4.addEventListener('click', function () {
  currentPlayer.proffession.cash += currentPlayer.realBusiness4.cost;
  currentPlayer.proffession.cashFlow -= currentPlayer.realBusiness4.cashflow;
  houseSell4.classList.add('hidden');
  currentPlayer.passive -= currentPlayer.realBusiness4.cashflow;
  currentPlayer.proffession.realBusiness4 = 0;
  currentPlayer.realBusiness4 = 0;
  fillIn(currentPlayer);
});
houseSell5.addEventListener('click', function () {
  currentPlayer.proffession.cash += currentPlayer.realBusiness5.cost;
  currentPlayer.proffession.cashFlow -= currentPlayer.realBusiness5.cashflow;
  houseSell5.classList.add('hidden');
  currentPlayer.passive -= currentPlayer.realBusiness5.cashflow;
  currentPlayer.proffession.realBusiness5 = 0;
  currentPlayer.realBusiness5 = 0;
  fillIn(currentPlayer);
});
houseSell6.addEventListener('click', function () {
  currentPlayer.proffession.cash += currentPlayer.realBusiness6.cost;
  currentPlayer.proffession.cashFlow -= currentPlayer.realBusiness6.cashflow;
  houseSell6.classList.add('hidden');
  currentPlayer.passive -= currentPlayer.realBusiness6.cashflow;
  currentPlayer.proffession.realBusiness6 = 0;
  currentPlayer.realBusiness6 = 0;
  fillIn(currentPlayer);
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

let type = '';
let cost = 5000;
let maxCashflow = 0;
let houseTypes = [
  ' House',
  ' Apartment',
  ' Duplex',
  ' Mansion',
  ' Water Bottle Manufacturer',
  ' Mouse Designer',
  ' Computer Seller',
  ' Game Developers',
];
const pickHouseBusiness = function () {
  dice = Math.trunc(Math.random() * 7) + 1;
  for (let i = 0; i <= houseTypes.length; i++) {
    if (dice == i) {
      type = houseTypes[i];
      console.log('hello');
    }
  }

  posNeg();
  if (positive) {
    cost += Math.trunc(Math.random() * 10000) + 1000;
  } else {
    cost -= Math.trunc(Math.random() * 1000) + 300;
  }
  maxCashflow = Math.trunc(cost * 0.12);
};
let currentAsset;
const next = function () {
  if (playerN < players - 1) {
    playerN += 1;

    currentPlayer = playerTrack[playerN];

    if (firstTurn) {
      pickJob(playerTrack[playerN]);
      fillIn(playerTrack[playerN]);
    } else {
      dice = Math.trunc(Math.random() * 4) + 1;

      if (dice == 3) {
        pickHouseBusiness();
        let house = new building(cost, type, maxCashflow, 0);
        currentAsset = house;
        console.log(house.cost);
        currentSell =
          house.type +
          ': Max Cashflow: ' +
          house.maxCashflow +
          ' Costs ' +
          house.cost;
        houseBusinessNo.classList.remove('hidden');
        houseBusinessYes.classList.remove('hidden');
      } else {
        currentSell = ' There are no houses to buy and no businesses to claim';
        houseBusinessNo.classList.add('hidden');
        houseBusinessYes.classList.add('hidden');
      }
      myt4uTick();
      gro4uTick();
      gr8Tick();
      ok4uTick();
      lymp4uTick();
      market();
      currentPlayer.proffession.cash += currentPlayer.proffession.cashFlow;
      fillIn(playerTrack[playerN]);
    }
  } else {
    dice = Math.trunc(Math.random() * 4) + 1;

    if (dice == 3) {
      pickHouseBusiness();
      let house = new building(cost, type, maxCashflow, 0);
      currentAsset = house;
      console.log(house.cost);
      currentSell =
        house.type +
        ': Max Cashflow: ' +
        house.maxCashflow +
        ' Costs ' +
        house.cost;
      houseBusinessNo.classList.remove('hidden');
      houseBusinessYes.classList.remove('hidden');
    } else {
      currentSell = ' There are no houses to buy and no businesses to claim';
      houseBusinessNo.classList.add('hidden');
      houseBusinessYes.classList.add('hidden');
    }
    myt4uTick();
    gro4uTick();
    gr8Tick();
    ok4uTick();
    lymp4uTick();
    market();
    turn += 1;
    turnEl.textContent = turn;
    playerN = 0;
    currentPlayer = player1;
    market();
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
  if (currentPlayer.proffession.cash >= 0) {
    clear();
    clear();
    clear();

    if (firstTurn) {
      dice = Math.trunc(Math.random() * 12) + 1;
    }
    next();
    doodad34.doodadCost = currentPlayer.proffession.cashFlow * 3;
    doodad33.doodadCost = currentPlayer.proffession.cashFlow * 1;
    doodad32.doodadCost = currentPlayer.proffession.cashFlow * 6;
    doodad29.doodadCost = currentPlayer.proffession.cashFlow * 2;
    doodad26.doodadCost = currentPlayer.proffession.cashFlow * 2;
    doodad25.doodadCost = currentPlayer.proffession.cashFlow * 6;
    doodad24.doodadCost = currentPlayer.proffession.cashFlow * 2;
    doodad22.doodadCost = currentPlayer.proffession.cashFlow * 1;
    doodad20.doodadCost = currentPlayer.proffession.cashFlow * 1;
    doodad18.doodadCost =
      currentPlayer.proffession.cashFlow * Math.trunc(Math.random() * 12) + 1;
    doodad19.doodadCost = currentPlayer.proffession.cashFlow * 4;
    doodad16.doodadCost = currentPlayer.proffession.cashFlow * 2;
    if (currentPlayer.proffession == doctor) {
      doodad2.doodad = 'You take your family to a nice steakhouse';
      doodad2.doodadCost = 600;
    } else if (
      currentPlayer.proffession == teacher ||
      currentPlayer.proffession == janitor
    ) {
      doodad2.doodad =
        'You take your family to taco bell and let them get anything';
      doodad2.doodadCost = 40;
    } else {
      doodad2.doodad = 'You take your family to a nice dinner';
      doodad2.doodadCost = 200;
    }
    if (turn >= Math.trunc(Math.random() * 20) + 10) {
      dice = Math.trunc(Math.random() * 35) + 1;
      modal.textContent =
        doodadArr[dice].doodad + '  Costs: ' + doodadArr[dice].doodadCost;
      currentPlayer.proffession.cash -= doodadArr[dice].doodadCost;
      openModal();
      if (dice + 1 == 9) {
        currentPlayer.tv += 1;
      } else if (dice + 1 == 5) {
        currentPlayer.jewelry += 1;
      } else if (dice + 1 == 7) {
        currentPlayer.boat += 1;
      } else if (dice + 1 == 14) {
        currentPlayer.fishingRod += 1;
      } else if (dice + 1 == 21) {
        currentPlayer.merch += 1;
      } else if (dice + 1 == 22) {
        currentPlayer.bowlingBall += 1;
      } else if (dice + 1 == 23) {
        currentPlayer.lawnMower += 1;
      } else if (dice + 1 == 23) {
        currentPlayer.watch += 1;
      } else if (dice + 1 == 30) {
        currentPlayer.furniture += 1;
      } else if (dice + 1 == 34) {
        currentPlayer.nintendoSwitch += 1;
      }
    }
  }
  fillIn(currentPlayer);
  if (
    currentPlayer.passive > currentPlayer.proffession.totalExpenses &&
    currentPlayer.proffession.cash > 10000000
  ) {
    modal.textContent =
      'You have won the Game of Life! As you are rich and get to enjoy life to the fullest, the other players rot away in a cubicle that never sees the sun. Congratulations! refresh to play again';
    openModal();
  }
});

posNeg();

let crazy = Math.random() * 10 + 1;

const myt4uTick = function () {
  if (myt4uCost <= myt4u.stock.lowRange) {
    myt4uCost += Math.random() * 4 + 3;
    myt4uCost = Math.trunc(myt4uCost);
  } else if (
    myt4uCost > myt4u.stock.lowRange &&
    myt4uCost <= myt4u.stock.second
  ) {
    posNeg();
    if (positive) {
      myt4uCost += Math.random() * 6 + 4;
      myt4uCost = Math.trunc(myt4uCost);
    } else {
      myt4uCost -= Math.random() * 3 + 1;
      myt4uCost = Math.trunc(myt4uCost);
    }
  } else if (myt4uCost > myt4u.stock.second && myt4uCost <= myt4u.stock.third) {
    posNeg();
    if (positive) {
      myt4uCost += Math.random() * 7 + 4;
      myt4uCost = Math.trunc(myt4uCost);
      crazy = Math.trunc(Math.random() * 10 + 1);
      if (crazy == 5) {
        myt4uCost = myt4u.stock.highRange;
      } else if (crazy == 6) {
        myt4uCost = myt4u.stock.lowRange;
      }
    } else {
      myt4uCost -= Math.random() * 2 + 2;
      myt4uCost = Math.trunc(myt4uCost);
    }
  } else if (myt4uCost > myt4u.stock.third && myt4uCost <= myt4u.stock.fourth) {
    posNeg();
    if (positive) {
      myt4uCost += Math.random() * 10 + 4;
      myt4uCost = Math.trunc(myt4uCost);
    } else {
      myt4uCost -= Math.random() * 4 + 2;
      myt4uCost = Math.trunc(myt4uCost);
    }
    crazy = Math.trunc(Math.random() * 10 + 1);
    if (crazy == 5) {
      myt4uCost = myt4u.stock.lowRange;
    }
  } else if (
    myt4uCost > myt4u.stock.fourth &&
    myt4uCost <= myt4u.stock.highRange
  ) {
    posNeg();
    if (positive) {
      myt4uCost += Math.random() * 10 + 4;
      myt4uCost = Math.trunc(myt4uCost);
    } else {
      myt4uCost -= Math.random() * 4 + 2;
      myt4uCost = Math.trunc(myt4uCost);
    }
  } else if (myt4uCost > myt4u.stock.highRange) {
    posNeg();
    if (positive) {
      myt4uCost += Math.random() * 3 + 1;
      myt4uCost = Math.trunc(myt4uCost);
    } else {
      posNeg();
      if (positive) {
        myt4uCost -= Math.random() * 8 + 5;
        myt4uCost = Math.trunc(myt4uCost);
      } else {
        myt4uCost -= Math.random() * myt4u.stock.highRange - 30 + 30;
        myt4uCost = Math.trunc(myt4uCost);
      }
    }
  }
};

const gro4uTick = function () {
  if (gro4uCost <= gro4u.stock.lowRange) {
    gro4uCost += Math.random() * 4 + 3;
    gro4uCost = Math.trunc(gro4uCost);
  } else if (
    gro4uCost > gro4u.stock.lowRange &&
    gro4uCost <= gro4u.stock.second
  ) {
    posNeg();
    if (positive) {
      gro4uCost += Math.random() * 6 + 4;
      gro4uCost = Math.trunc(gro4uCost);
    } else {
      gro4uCost -= Math.random() * 3 + 1;
      gro4uCost = Math.trunc(gro4uCost);
    }
  } else if (gro4uCost > gro4u.stock.second && gro4uCost <= gro4u.stock.third) {
    posNeg();
    if (positive) {
      gro4uCost += Math.random() * 7 + 4;
      gro4uCost = Math.trunc(gro4uCost);
      crazy = Math.trunc(Math.random() * 10 + 1);
      if (crazy == 5) {
        gro4uCost = gro4u.stock.highRange;
      } else if (crazy == 6) {
        gro4uCost = gro4u.stock.lowRange;
      }
    } else {
      gro4uCost -= Math.random() * 3 + 2;
      gro4uCost = Math.trunc(gro4uCost);
    }
  } else if (gro4uCost > gro4u.stock.third && gro4uCost <= gro4u.stock.fourth) {
    posNeg();
    if (positive) {
      gro4uCost += Math.random() * 10 + 4;
      gro4uCost = Math.trunc(gro4uCost);
    } else {
      gro4uCost -= Math.random() * 3 + 2;
      gro4uCost = Math.trunc(gro4uCost);
    }
    crazy = Math.trunc(Math.random() * 10 + 1);
    if (crazy == 5) {
      gro4uCost = gro4u.stock.lowRange;
    }
  } else if (
    gro4uCost > gro4u.stock.fourth &&
    gro4uCost <= gro4u.stock.highRange
  ) {
    posNeg();
    if (positive) {
      gro4uCost += Math.random() * 10 + 4;
      gro4uCost = Math.trunc(gro4uCost);
    } else {
      gro4uCost -= Math.random() * 4 + 2;
      gro4uCost = Math.trunc(gro4uCost);
    }
  } else if (gro4uCost > gro4u.stock.highRange) {
    posNeg();
    if (positive) {
      gro4uCost += Math.random() * 3 + 1;
      gro4uCost = Math.trunc(gro4uCost);
    } else {
      posNeg();
      if (positive) {
        gro4uCost -= Math.random() * 8 + 5;
        gro4uCost = Math.trunc(gro4uCost);
      } else {
        gro4uCost -= Math.random() * gro4u.stock.highRange - 30 + 30;
        gro4uCost = Math.trunc(gro4uCost);
      }
    }
  }
};
const gr8Tick = function () {
  if (gr8Cost <= gr8.stock.lowRange) {
    gr8Cost += Math.random() * 4 + 3;
    gr8Cost = Math.trunc(gr8Cost);
  } else if (gr8Cost > gr8.stock.lowRange && gr8Cost <= gr8.stock.second) {
    posNeg();
    if (positive) {
      gr8Cost += Math.random() * 7 + 4;
      gr8Cost = Math.trunc(gr8Cost);
    } else {
      gr8Cost -= Math.random() * 2 + 2;
      gr8Cost = Math.trunc(gr8Cost);
    }
  } else if (gr8Cost > gr8.stock.second && gr8Cost <= gr8.stock.third) {
    posNeg();
    if (positive) {
      gr8Cost += Math.random() * 7 + 4;
      gr8Cost = Math.trunc(gr8Cost);
      crazy = Math.trunc(Math.random() * 10 + 1);
      if (crazy == 5) {
        gr8Cost = gr8.stock.highRange;
      } else if (crazy == 6) {
        gr8Cost = gr8.stock.lowRange;
      }
    } else {
      gr8Cost -= Math.random() * 3 + 2;
      gr8Cost = Math.trunc(gr8Cost);
    }
  } else if (gr8Cost > gr8.stock.third && gr8Cost <= gr8.stock.fourth) {
    posNeg();
    if (positive) {
      gr8Cost += Math.random() * 10 + 4;
      gr8Cost = Math.trunc(gr8Cost);
    } else {
      gr8Cost -= Math.random() * 3 + 2;
      gr8Cost = Math.trunc(gr8Cost);
    }
    crazy = Math.trunc(Math.random() * 10 + 1);
    if (crazy == 5) {
      gr8Cost = gr8.stock.lowRange;
    }
  } else if (gr8Cost > gr8.stock.fourth && gr8Cost <= gr8.stock.highRange) {
    posNeg();
    if (positive) {
      gr8Cost += Math.random() * 10 + 4;
      gr8Cost = Math.trunc(gr8Cost);
    } else {
      gr8Cost -= Math.random() * 3 + 3;
      gr8Cost = Math.trunc(gr8Cost);
    }
  } else if (gr8Cost > gr8.stock.highRange) {
    posNeg();
    if (positive) {
      gr8Cost += Math.random() * 3 + 1;
      gr8Cost = Math.trunc(gr8Cost);
    } else {
      posNeg();
      if (positive) {
        gr8Cost -= Math.random() * 10 + 5;
        gr8Cost = Math.trunc(gr8Cost);
      } else {
        gr8Cost -= Math.random() * gr8.stock.highRange - 30 + 30;
        gr8Cost = Math.trunc(gr8Cost);
      }
    }
  }
};

const ok4uTick = function () {
  if (ok4uCost <= ok4u.stock.lowRange) {
    ok4uCost += Math.random() * 4 + 3;
    ok4uCost = Math.trunc(ok4uCost);
  } else if (ok4uCost > ok4u.stock.lowRange && ok4uCost <= ok4u.stock.second) {
    posNeg();
    if (positive) {
      ok4uCost += Math.random() * 6 + 4;
      ok4uCost = Math.trunc(ok4uCost);
    } else {
      ok4uCost -= Math.random() * 3 + 1;
      ok4uCost = Math.trunc(ok4uCost);
    }
  } else if (ok4uCost > ok4u.stock.second && ok4uCost <= ok4u.stock.third) {
    posNeg();
    if (positive) {
      ok4uCost += Math.random() * 7 + 4;
      ok4uCost = Math.trunc(ok4uCost);
    } else {
      ok4uCost -= Math.random() * 3 + 1;
      ok4uCost = Math.trunc(ok4uCost);
    }
  } else if (ok4uCost > ok4u.stock.third && ok4uCost <= ok4u.stock.fourth) {
    posNeg();
    if (positive) {
      ok4uCost += Math.random() * 10 + 4;
      ok4uCost = Math.trunc(ok4uCost);
      crazy = Math.trunc(Math.random() * 10 + 1);
      if (crazy == 5) {
        ok4uCost = ok4u.stock.highRange;
      } else if (crazy == 6) {
        ok4uCost = ok4u.stock.lowRange;
      }
    } else {
      ok4uCost -= Math.random() * 4 + 2;
      ok4uCost = Math.trunc(ok4uCost);
    }
    crazy = Math.trunc(Math.random() * 10 + 1);
    if (crazy == 5) {
      ok4uCost = ok4u.stock.lowRange;
    }
  } else if (ok4uCost > ok4u.stock.fourth && ok4uCost <= ok4u.stock.highRange) {
    posNeg();
    if (positive) {
      ok4uCost += Math.random() * 10 + 4;
      ok4uCost = Math.trunc(ok4uCost);
    } else {
      ok4uCost -= Math.random() * 3 + 3;
      ok4uCost = Math.trunc(ok4uCost);
    }
  } else if (ok4uCost > ok4u.stock.highRange) {
    posNeg();
    if (positive) {
      ok4uCost += Math.random() * 3 + 1;
      ok4uCost = Math.trunc(ok4uCost);
    } else {
      posNeg();
      if (positive) {
        ok4uCost -= Math.random() * 10 + 5;
        ok4uCost = Math.trunc(ok4uCost);
      } else {
        ok4uCost -= Math.random() * ok4u.stock.highRange - 30 + 30;
        ok4uCost = Math.trunc(ok4uCost);
      }
    }
  }
};

const lymp4uTick = function () {
  if (lymp4uCost <= lymp4u.stock.lowRange) {
    lymp4uCost += Math.random() * 4 + 3;
    lymp4uCost = Math.trunc(lymp4uCost);
  } else if (
    lymp4uCost > lymp4u.stock.lowRange &&
    lymp4uCost <= lymp4u.stock.second
  ) {
    posNeg();
    if (positive) {
      lymp4uCost += Math.random() * 6 + 4;
      lymp4uCost = Math.trunc(lymp4uCost);
    } else {
      lymp4uCost -= Math.random() * 2 + 1;
      lymp4uCost = Math.trunc(lymp4uCost);
    }
  } else if (
    lymp4uCost > lymp4u.stock.second &&
    lymp4uCost <= lymp4u.stock.third
  ) {
    posNeg();
    if (positive) {
      lymp4uCost += Math.random() * 7 + 4;
      lymp4uCost = Math.trunc(lymp4uCost);
      crazy = Math.trunc(Math.random() * 10 + 1);
      if (crazy == 5) {
        lymp4uCost = lymp4u.stock.highRange;
      } else if (crazy == 6) {
        lymp4uCost = lymp4u.stock.lowRange;
      }
    } else {
      lymp4uCost -= Math.random() * 3 + 2;
      lymp4uCost = Math.trunc(lymp4uCost);
    }
  } else if (
    lymp4uCost > lymp4u.stock.third &&
    lymp4uCost <= lymp4u.stock.fourth
  ) {
    posNeg();
    if (positive) {
      lymp4uCost += Math.random() * 10 + 4;
      lymp4uCost = Math.trunc(lymp4uCost);
      crazy = Math.trunc(Math.random() * 10 + 1);
      if (crazy == 5) {
        lymp4uCost = lymp4u.stock.highRange;
      } else if (crazy == 6) {
        lymp4uCost = lymp4u.stock.lowRange;
      }
    } else {
      lymp4uCost -= Math.random() * 4 + 3;
      lymp4uCost = Math.trunc(lymp4uCost);
    }
  } else if (
    lymp4uCost > lymp4u.stock.fourth &&
    lymp4uCost <= lymp4u.stock.highRange
  ) {
    posNeg();
    if (positive) {
      lymp4uCost += Math.random() * 10 + 4;
      lymp4uCost = Math.trunc(lymp4uCost);
    } else {
      lymp4uCost -= Math.random() * 4 + 3;
      lymp4uCost = Math.trunc(lymp4uCost);
    }
  } else if (lymp4uCost > lymp4u.stock.highRange) {
    posNeg();
    if (positive) {
      lymp4uCost += Math.random() * 3 + 1;
      lymp4uCost = Math.trunc(lymp4uCost);
    } else {
      posNeg();
      if (positive) {
        lymp4uCost -= Math.random() * 10 + 5;
        lymp4uCost = Math.trunc(lymp4uCost);
      } else {
        lymp4uCost -= Math.random() * lymp4u.stock.highRange - 30 + 30;
        lymp4uCost = Math.trunc(lymp4uCost);
      }
    }
  }
};

okLoan.classList.add('hidden');
loanValue.classList.add('hidden');

let n = 0;
const stockAverage = function (stockAverage, stock, stockCost) {
  n = 0;
  stockAverage = 0;
  for (let i = 0; i < stock.length; i++) {
    stockAverage += stockCost[i] * stock[i];
  }
  for (let i = 0; i < stock.length; i++) {
    n += stock[i];
  }
  if (stock.length > 0) {
    return (stockAverage = Math.trunc(stockAverage / n));
  } else {
    return 0;
  }
};

n = 0;
const stockArr = function (stock) {
  n = 0;
  if (selling) {
    n = Number(bellEl.value);
    for (let i = 0; i < stock.length; i++) {
      console.log(i);
      if (n >= stock[i]) {
        console.log('for');
        n -= stock[i];
        stock.shift();
        i -= 1;
      } else if (stock[i] > 0) {
        stock[i] -= n;
        console.log('ford');
        break;
      }
    }
    return stock;
  }
};

const building = function (cost, type, maxCashflow, cashflow) {
  this.cost = cost;
  this.type = type;
  this.maxCashflow = maxCashflow;
  this.cashflow = cashflow;
};

let currentAssets = [];
let assetText = [];

const market = function () {
  currentAssets.length = 0;
  assetText.length = 0;
  currentAssets.push(
    currentPlayer.realBusiness1,
    currentPlayer.realBusiness2,
    currentPlayer.realBusiness3,
    currentPlayer.realBusiness4,
    currentPlayer.realBusiness5,
    currentPlayer.realBusiness6
  );
  assetText.push(
    currentPlayer.proffession.realBusiness1,
    currentPlayer.proffession.realBusiness2,
    currentPlayer.proffession.realBusiness3,
    currentPlayer.proffession.realBusiness4,
    currentPlayer.proffession.realBusiness5,
    currentPlayer.proffession.realBusiness6
  );
  for (let i = 0; i < 6; i++) {
    if (currentAssets[i] !== 0) {
      if (currentAssets[i].cashflow <= currentAssets[i].maxCashflow) {
        currentAssets[i].cashflow += Math.round(
          currentAssets[i].maxCashflow * 0.005
        );
        currentPlayer.passive += Math.round(
          currentAssets[i].maxCashflow * 0.005
        );
        currentPlayer.proffession.cashFlow += Math.round(
          currentAssets[i].maxCashflow * 0.005
        );
      }
      posNeg();
      if (positive) {
        currentAssets[i].cost += Math.round(turn * 30);
        currentAssets[i].maxCashflow = Math.round(currentAssets[i].cost * 0.12);
      } else {
        if (currentAssets[i].cost > 6000) {
          currentAssets[i].cost -= Math.round(turn * 5);
          currentAssets[i].maxCashflow = Math.round(
            currentAssets[i].cost * 0.12
          );
        }
      }
      assetText[i] =
        currentAssets[i].type +
        ' Sell for: ' +
        currentAssets[i].cost +
        ' Max Cashflow: ' +
        currentAssets[i].maxCashflow;
    }
  }
  currentPlayer.proffession.realBusiness1 = assetText[0];
  currentPlayer.proffession.realBusiness2 = assetText[1];
  currentPlayer.proffession.realBusiness3 = assetText[2];
  currentPlayer.proffession.realBusiness4 = assetText[3];
  currentPlayer.proffession.realBusiness5 = assetText[4];
  currentPlayer.proffession.realBusiness6 = assetText[5];
  currentPlayer.realBusiness1 = currentAssets[0];
  currentPlayer.realBusiness2 = currentAssets[1];
  currentPlayer.realBusiness3 = currentAssets[2];
  currentPlayer.realBusiness4 = currentAssets[3];
  currentPlayer.realBusiness5 = currentAssets[4];
  currentPlayer.realBusiness6 = currentAssets[5];
};
