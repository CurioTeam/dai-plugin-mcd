"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOKEN_PRICE_LAST_UPDATE = exports.TOKEN_PRICE_UPDATE_INTERVAL = exports.TOKEN_PRICES_NEXT_UPDATES = exports.TOKEN_PRICE_NEXT_UPDATE = exports.EMERGENCY_SHUTDOWN_TIME = exports.EMERGENCY_SHUTDOWN_ACTIVE = exports.ADAPTER_BALANCE = exports.TOKEN_ALLOWANCE = exports.TOKEN_ALLOWANCE_BASE = exports.TOKEN_BALANCE = exports.COLLATERAL_DEBT_AVAILABLE = exports.COLLATERAL_DEBT_CEILINGS = exports.COLLATERAL_TYPES_DATA = exports.COLLATERAL_TYPE_DATA = exports.PROXY_OWNER = exports.USER_VAULTS_DATA = exports.USER_VAULTS_LIST = exports.SAVINGS = exports.ALLOWANCE = exports.BALANCE = exports.SYSTEM_COLLATERALIZATION = exports.COLLATERAL_TYPE_COLLATERALIZATION = exports.COLLATERAL_DEBT = exports.COLLATERAL_AVAILABLE_VALUE = exports.COLLATERAL_AVAILABLE_AMOUNT = exports.MIN_SAFE_COLLATERAL_AMOUNT = exports.DAI_AVAILABLE = exports.LIQUIDATION_PRICE = exports.COLLATERAL_VALUE = exports.COLLATERAL_AMOUNT = exports.COLLATERALIZATION_RATIO = exports.DEBT_VALUE = exports.TOTAL_DAI_LOCKED_IN_DSR = exports.DAI_LOCKED_IN_DSR = exports.VAULT = exports.VAULT_COLLATERAL_AND_DEBT = exports.VAULT_EXTERNAL_OWNER = exports.VAULT_TYPE_AND_ADDRESS = exports.DEFAULT_COLLATERAL_TYPES_PRICES = exports.COLLATERAL_TYPES_PRICES = exports.COLLATERAL_TYPE_PRICE = exports.USER_VAULT_TYPES = exports.USER_VAULT_ADDRESSES = exports.USER_VAULT_IDS = exports.MAX_AUCTION_LOT_SIZE = exports.LIQUIDATION_PENALTY = exports.LIQUIDATOR_ADDRESS = exports.SAVINGS_RATE_ACCUMULATOR = exports.DATE_EARNINGS_LAST_ACCRUED = exports.ANNUAL_DAI_SAVINGS_RATE = exports.DAI_SAVINGS_RATE = exports.SAVINGS_DAI = exports.TOTAL_SAVINGS_DAI = exports.VAULT_OWNER = exports.VAULTS_CREATED = exports.VAULT_TYPE = exports.VAULT_ADDRESS = exports.PROXY_ADDRESS = exports.BASE_COLLATERAL_FEE = exports.DATE_STABILITY_FEES_LAST_LEVIED = exports.ANNUAL_STABILITY_FEE = exports.LIQUIDATION_RATIO = exports.RATIO_DAI_USD = exports.RAW_LIQUIDATION_RATIO = exports.PRICE_FEED_ADDRESS = exports.GLOBAL_DEBT_CEILING = exports.UNLOCKED_COLLATERAL = exports.ENCUMBERED_DEBT = exports.ENCUMBERED_COLLATERAL = exports.TOTAL_DAI_SUPPLY = exports.DEBT_FLOOR = exports.DEBT_CEILING = exports.PRICE_WITH_SAFETY_MARGIN = exports.DEBT_SCALING_FACTOR = exports.TOTAL_ENCUMBERED_DEBT = void 0;
// vat
var TOTAL_ENCUMBERED_DEBT = 'totalEncumberedDebt';
exports.TOTAL_ENCUMBERED_DEBT = TOTAL_ENCUMBERED_DEBT;
var DEBT_SCALING_FACTOR = 'debtScalingFactor';
exports.DEBT_SCALING_FACTOR = DEBT_SCALING_FACTOR;
var PRICE_WITH_SAFETY_MARGIN = 'priceWithSafetyMargin';
exports.PRICE_WITH_SAFETY_MARGIN = PRICE_WITH_SAFETY_MARGIN;
var DEBT_CEILING = 'debtCeiling';
exports.DEBT_CEILING = DEBT_CEILING;
var DEBT_FLOOR = 'debtFloor';
exports.DEBT_FLOOR = DEBT_FLOOR;
var TOTAL_DAI_SUPPLY = 'totalDaiSupply';
exports.TOTAL_DAI_SUPPLY = TOTAL_DAI_SUPPLY;
var ENCUMBERED_COLLATERAL = 'encumberedCollateral';
exports.ENCUMBERED_COLLATERAL = ENCUMBERED_COLLATERAL;
var ENCUMBERED_DEBT = 'encumberedDebt';
exports.ENCUMBERED_DEBT = ENCUMBERED_DEBT;
var UNLOCKED_COLLATERAL = 'unlockedCollateral';
exports.UNLOCKED_COLLATERAL = UNLOCKED_COLLATERAL;
var GLOBAL_DEBT_CEILING = 'globalDebtCeiling'; // spot

exports.GLOBAL_DEBT_CEILING = GLOBAL_DEBT_CEILING;
var PRICE_FEED_ADDRESS = 'priceFeedAddress';
exports.PRICE_FEED_ADDRESS = PRICE_FEED_ADDRESS;
var RAW_LIQUIDATION_RATIO = 'rawLiquidationRatio';
exports.RAW_LIQUIDATION_RATIO = RAW_LIQUIDATION_RATIO;
var RATIO_DAI_USD = 'ratioDaiUsd';
exports.RATIO_DAI_USD = RATIO_DAI_USD;
var LIQUIDATION_RATIO = 'liquidationRatio'; // jug

exports.LIQUIDATION_RATIO = LIQUIDATION_RATIO;
var ANNUAL_STABILITY_FEE = 'annualStabilityFee';
exports.ANNUAL_STABILITY_FEE = ANNUAL_STABILITY_FEE;
var DATE_STABILITY_FEES_LAST_LEVIED = 'dateStabilityFeesLastLevied';
exports.DATE_STABILITY_FEES_LAST_LEVIED = DATE_STABILITY_FEES_LAST_LEVIED;
var BASE_COLLATERAL_FEE = 'baseCollateralFee'; // proxyRegistry

exports.BASE_COLLATERAL_FEE = BASE_COLLATERAL_FEE;
var PROXY_ADDRESS = 'proxyAddress'; // cdpManager

exports.PROXY_ADDRESS = PROXY_ADDRESS;
var VAULT_ADDRESS = 'vaultAddress';
exports.VAULT_ADDRESS = VAULT_ADDRESS;
var VAULT_TYPE = 'vaultType';
exports.VAULT_TYPE = VAULT_TYPE;
var VAULTS_CREATED = 'vaultsCreated';
exports.VAULTS_CREATED = VAULTS_CREATED;
var VAULT_OWNER = 'vaultOwner'; // pot

exports.VAULT_OWNER = VAULT_OWNER;
var TOTAL_SAVINGS_DAI = 'totalSavingsDai';
exports.TOTAL_SAVINGS_DAI = TOTAL_SAVINGS_DAI;
var SAVINGS_DAI = 'savingsDai';
exports.SAVINGS_DAI = SAVINGS_DAI;
var DAI_SAVINGS_RATE = 'daiSavingsRate';
exports.DAI_SAVINGS_RATE = DAI_SAVINGS_RATE;
var ANNUAL_DAI_SAVINGS_RATE = 'annualDaiSavingsRate';
exports.ANNUAL_DAI_SAVINGS_RATE = ANNUAL_DAI_SAVINGS_RATE;
var DATE_EARNINGS_LAST_ACCRUED = 'dateEarningsLastAccrued';
exports.DATE_EARNINGS_LAST_ACCRUED = DATE_EARNINGS_LAST_ACCRUED;
var SAVINGS_RATE_ACCUMULATOR = 'savingsRateAccumulator'; // cat

exports.SAVINGS_RATE_ACCUMULATOR = SAVINGS_RATE_ACCUMULATOR;
var LIQUIDATOR_ADDRESS = 'liquidatorAddress';
exports.LIQUIDATOR_ADDRESS = LIQUIDATOR_ADDRESS;
var LIQUIDATION_PENALTY = 'liquidationPenalty';
exports.LIQUIDATION_PENALTY = LIQUIDATION_PENALTY;
var MAX_AUCTION_LOT_SIZE = 'maxAuctionLotSize'; // getCdp

exports.MAX_AUCTION_LOT_SIZE = MAX_AUCTION_LOT_SIZE;
var USER_VAULT_IDS = 'userVaultIds';
exports.USER_VAULT_IDS = USER_VAULT_IDS;
var USER_VAULT_ADDRESSES = 'userVaultAddresses';
exports.USER_VAULT_ADDRESSES = USER_VAULT_ADDRESSES;
var USER_VAULT_TYPES = 'userVaultTypes'; // computed

exports.USER_VAULT_TYPES = USER_VAULT_TYPES;
var COLLATERAL_TYPE_PRICE = 'collateralTypePrice';
exports.COLLATERAL_TYPE_PRICE = COLLATERAL_TYPE_PRICE;
var COLLATERAL_TYPES_PRICES = 'collateralTypesPrices';
exports.COLLATERAL_TYPES_PRICES = COLLATERAL_TYPES_PRICES;
var DEFAULT_COLLATERAL_TYPES_PRICES = 'defaultCollateralTypesPrices';
exports.DEFAULT_COLLATERAL_TYPES_PRICES = DEFAULT_COLLATERAL_TYPES_PRICES;
var VAULT_TYPE_AND_ADDRESS = 'vaultTypeAndAddress';
exports.VAULT_TYPE_AND_ADDRESS = VAULT_TYPE_AND_ADDRESS;
var VAULT_EXTERNAL_OWNER = 'vaultExternalOwner';
exports.VAULT_EXTERNAL_OWNER = VAULT_EXTERNAL_OWNER;
var VAULT_COLLATERAL_AND_DEBT = 'vaultCollateralAndDebt';
exports.VAULT_COLLATERAL_AND_DEBT = VAULT_COLLATERAL_AND_DEBT;
var VAULT = 'vault';
exports.VAULT = VAULT;
var DAI_LOCKED_IN_DSR = 'daiLockedInDsr';
exports.DAI_LOCKED_IN_DSR = DAI_LOCKED_IN_DSR;
var TOTAL_DAI_LOCKED_IN_DSR = 'totalDaiLockedInDsr';
exports.TOTAL_DAI_LOCKED_IN_DSR = TOTAL_DAI_LOCKED_IN_DSR;
var DEBT_VALUE = 'debtValue';
exports.DEBT_VALUE = DEBT_VALUE;
var COLLATERALIZATION_RATIO = 'collateralizationRatio';
exports.COLLATERALIZATION_RATIO = COLLATERALIZATION_RATIO;
var COLLATERAL_AMOUNT = 'collateralAmount';
exports.COLLATERAL_AMOUNT = COLLATERAL_AMOUNT;
var COLLATERAL_VALUE = 'collateralValue';
exports.COLLATERAL_VALUE = COLLATERAL_VALUE;
var LIQUIDATION_PRICE = 'liquidationPrice';
exports.LIQUIDATION_PRICE = LIQUIDATION_PRICE;
var DAI_AVAILABLE = 'daiAvailable';
exports.DAI_AVAILABLE = DAI_AVAILABLE;
var MIN_SAFE_COLLATERAL_AMOUNT = 'minSafeCollateralAmount';
exports.MIN_SAFE_COLLATERAL_AMOUNT = MIN_SAFE_COLLATERAL_AMOUNT;
var COLLATERAL_AVAILABLE_AMOUNT = 'collateralAvailableAmount';
exports.COLLATERAL_AVAILABLE_AMOUNT = COLLATERAL_AVAILABLE_AMOUNT;
var COLLATERAL_AVAILABLE_VALUE = 'collateralAvailableValue';
exports.COLLATERAL_AVAILABLE_VALUE = COLLATERAL_AVAILABLE_VALUE;
var COLLATERAL_DEBT = 'collateralDebt';
exports.COLLATERAL_DEBT = COLLATERAL_DEBT;
var COLLATERAL_TYPE_COLLATERALIZATION = 'collateralTypeCollateralization';
exports.COLLATERAL_TYPE_COLLATERALIZATION = COLLATERAL_TYPE_COLLATERALIZATION;
var SYSTEM_COLLATERALIZATION = 'systemCollateralization';
exports.SYSTEM_COLLATERALIZATION = SYSTEM_COLLATERALIZATION;
var BALANCE = 'balance';
exports.BALANCE = BALANCE;
var ALLOWANCE = 'allowance';
exports.ALLOWANCE = ALLOWANCE;
var SAVINGS = 'savings';
exports.SAVINGS = SAVINGS;
var USER_VAULTS_LIST = 'userVaultsList';
exports.USER_VAULTS_LIST = USER_VAULTS_LIST;
var USER_VAULTS_DATA = 'userVaultsData';
exports.USER_VAULTS_DATA = USER_VAULTS_DATA;
var PROXY_OWNER = 'proxyOwner';
exports.PROXY_OWNER = PROXY_OWNER;
var COLLATERAL_TYPE_DATA = 'collateralTypeData';
exports.COLLATERAL_TYPE_DATA = COLLATERAL_TYPE_DATA;
var COLLATERAL_TYPES_DATA = 'collateralTypesData';
exports.COLLATERAL_TYPES_DATA = COLLATERAL_TYPES_DATA;
var COLLATERAL_DEBT_CEILINGS = 'collateralDebtCeilings';
exports.COLLATERAL_DEBT_CEILINGS = COLLATERAL_DEBT_CEILINGS;
var COLLATERAL_DEBT_AVAILABLE = 'collateralDebtAvailable'; // token

exports.COLLATERAL_DEBT_AVAILABLE = COLLATERAL_DEBT_AVAILABLE;
var TOKEN_BALANCE = 'tokenBalance';
exports.TOKEN_BALANCE = TOKEN_BALANCE;
var TOKEN_ALLOWANCE_BASE = 'tokenAllowanceBase';
exports.TOKEN_ALLOWANCE_BASE = TOKEN_ALLOWANCE_BASE;
var TOKEN_ALLOWANCE = 'tokenAllowance';
exports.TOKEN_ALLOWANCE = TOKEN_ALLOWANCE;
var ADAPTER_BALANCE = 'adapterBalance'; // end

exports.ADAPTER_BALANCE = ADAPTER_BALANCE;
var EMERGENCY_SHUTDOWN_ACTIVE = 'emergencyShutdownActive';
exports.EMERGENCY_SHUTDOWN_ACTIVE = EMERGENCY_SHUTDOWN_ACTIVE;
var EMERGENCY_SHUTDOWN_TIME = 'emergencyShutdownTime'; // osm

exports.EMERGENCY_SHUTDOWN_TIME = EMERGENCY_SHUTDOWN_TIME;
var TOKEN_PRICE_NEXT_UPDATE = 'tokenPriceNextUpdate';
exports.TOKEN_PRICE_NEXT_UPDATE = TOKEN_PRICE_NEXT_UPDATE;
var TOKEN_PRICES_NEXT_UPDATES = 'tokenPricesNextUpdates';
exports.TOKEN_PRICES_NEXT_UPDATES = TOKEN_PRICES_NEXT_UPDATES;
var TOKEN_PRICE_UPDATE_INTERVAL = 'tokenPriceUpdateInterval';
exports.TOKEN_PRICE_UPDATE_INTERVAL = TOKEN_PRICE_UPDATE_INTERVAL;
var TOKEN_PRICE_LAST_UPDATE = 'tokenPriceLastUpdate';
exports.TOKEN_PRICE_LAST_UPDATE = TOKEN_PRICE_LAST_UPDATE;