/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export const enum SlotHistoryCheck {
  Future = 0,
  TooOld = 1,
  Found = 2,
  NotFound = 3
}
export const enum InstructionErrorFieldless {
  GenericError = 0,
  InvalidArgument = 1,
  InvalidInstructionData = 2,
  InvalidAccountData = 3,
  AccountDataTooSmall = 4,
  InsufficientFunds = 5,
  IncorrectProgramId = 6,
  MissingRequiredSignature = 7,
  AccountAlreadyInitialized = 8,
  UninitializedAccount = 9,
  UnbalancedInstruction = 10,
  ModifiedProgramId = 11,
  ExternalAccountLamportSpend = 12,
  ExternalAccountDataModified = 13,
  ReadonlyLamportChange = 14,
  ReadonlyDataModified = 15,
  DuplicateAccountIndex = 16,
  ExecutableModified = 17,
  RentEpochModified = 18,
  NotEnoughAccountKeys = 19,
  AccountDataSizeChanged = 20,
  AccountNotExecutable = 21,
  AccountBorrowFailed = 22,
  AccountBorrowOutstanding = 23,
  DuplicateAccountOutOfSync = 24,
  InvalidError = 25,
  ExecutableDataModified = 26,
  ExecutableLamportChange = 27,
  ExecutableAccountNotRentExempt = 28,
  UnsupportedProgramId = 29,
  CallDepth = 30,
  MissingAccount = 31,
  ReentrancyNotAllowed = 32,
  MaxSeedLengthExceeded = 33,
  InvalidSeeds = 34,
  InvalidRealloc = 35,
  ComputationalBudgetExceeded = 36,
  PrivilegeEscalation = 37,
  ProgramEnvironmentSetupFailure = 38,
  ProgramFailedToComplete = 39,
  ProgramFailedToCompile = 40,
  Immutable = 41,
  IncorrectAuthority = 42,
  AccountNotRentExempt = 43,
  InvalidAccountOwner = 44,
  ArithmeticOverflow = 45,
  UnsupportedSysvar = 46,
  IllegalOwner = 47,
  MaxAccountsDataAllocationsExceeded = 48,
  MaxAccountsExceeded = 49,
  MaxInstructionTraceLengthExceeded = 50,
  BuiltinProgramsMustConsumeComputeUnits = 51
}
export const enum TransactionErrorFieldless {
  AccountInUse = 0,
  AccountLoadedTwice = 1,
  AccountNotFound = 2,
  ProgramAccountNotFound = 3,
  InsufficientFundsForFee = 4,
  InvalidAccountForFee = 5,
  AlreadyProcessed = 6,
  BlockhashNotFound = 7,
  CallChainTooDeep = 8,
  MissingSignatureForFee = 9,
  InvalidAccountIndex = 10,
  SignatureFailure = 11,
  InvalidProgramForExecution = 12,
  SanitizeFailure = 13,
  ClusterMaintenance = 14,
  AccountBorrowOutstanding = 15,
  WouldExceedMaxBlockCostLimit = 16,
  UnsupportedVersion = 17,
  InvalidWritableAccount = 18,
  WouldExceedMaxAccountCostLimit = 19,
  WouldExceedAccountDataBlockLimit = 20,
  TooManyAccountLocks = 21,
  AddressLookupTableNotFound = 22,
  InvalidAddressLookupTableOwner = 23,
  InvalidAddressLookupTableData = 24,
  InvalidAddressLookupTableIndex = 25,
  InvalidRentPayingAccount = 26,
  WouldExceedMaxVoteCostLimit = 27,
  WouldExceedAccountDataTotalLimit = 28,
  MaxLoadedAccountsDataSizeExceeded = 29,
  ResanitizationNeeded = 30,
  InvalidLoadedAccountsDataSizeLimit = 31,
  UnbalancedTransaction = 32,
  ProgramCacheHitMaxLimit = 33,
  CommitCancelled = 34
}
export declare class Account {
  constructor(lamports: bigint, data: Uint8Array, owner: Uint8Array, executable: boolean, rentEpoch: bigint)
  lamports(): bigint
  data(): Uint8Array
  owner(): Uint8Array
  executable(): boolean
  rentEpoch(): bigint
  toString(): string
}
export declare class ComputeBudget {
  constructor()
  get computeUnitLimit(): bigint
  set computeUnitLimit(limit: bigint)
  set log64Units(val: bigint)
  get log64Units(): bigint
  set createProgramAddressUnits(val: bigint)
  get createProgramAddressUnits(): bigint
  set invokeUnits(val: bigint)
  get invokeUnits(): bigint
  set maxInstructionStackDepth(val: bigint)
  get maxInstructionStackDepth(): bigint
  set maxInstructionTraceLength(val: bigint)
  get maxInstructionTraceLength(): bigint
  set sha256BaseCost(val: bigint)
  get sha256BaseCost(): bigint
  set sha256ByteCost(val: bigint)
  get sha256ByteCost(): bigint
  set sha256MaxSlices(val: bigint)
  get sha256MaxSlices(): bigint
  set maxCallDepth(val: bigint)
  get maxCallDepth(): bigint
  set stackFrameSize(val: bigint)
  get stackFrameSize(): bigint
  set logPubkeyUnits(val: bigint)
  get logPubkeyUnits(): bigint
  set maxCpiInstructionSize(val: bigint)
  get maxCpiInstructionSize(): bigint
  set cpiBytesPerUnit(val: bigint)
  get cpiBytesPerUnit(): bigint
  set sysvarBaseCost(val: bigint)
  get sysvarBaseCost(): bigint
  set secp256K1RecoverCost(val: bigint)
  get secp256K1RecoverCost(): bigint
  set syscallBaseCost(val: bigint)
  get syscallBaseCost(): bigint
  set curve25519EdwardsValidatePointCost(val: bigint)
  get curve25519EdwardsValidatePointCost(): bigint
  set curve25519EdwardsAddCost(val: bigint)
  get curve25519EdwardsAddCost(): bigint
  set curve25519EdwardsSubtractCost(val: bigint)
  get curve25519EdwardsSubtractCost(): bigint
  set curve25519EdwardsMultiplyCost(val: bigint)
  get curve25519EdwardsMultiplyCost(): bigint
  set curve25519EdwardsMsmBaseCost(val: bigint)
  get curve25519EdwardsMsmBaseCost(): bigint
  set curve25519EdwardsMsmIncrementalCost(val: bigint)
  get curve25519EdwardsMsmIncrementalCost(): bigint
  set curve25519RistrettoValidatePointCost(val: bigint)
  get curve25519RistrettoValidatePointCost(): bigint
  set curve25519RistrettoAddCost(val: bigint)
  get curve25519RistrettoAddCost(): bigint
  set curve25519RistrettoSubtractCost(val: bigint)
  get curve25519RistrettoSubtractCost(): bigint
  set curve25519RistrettoMultiplyCost(val: bigint)
  get curve25519RistrettoMultiplyCost(): bigint
  set curve25519RistrettoMsmBaseCost(val: bigint)
  get curve25519RistrettoMsmBaseCost(): bigint
  set curve25519RistrettoMsmIncrementalCost(val: bigint)
  get curve25519RistrettoMsmIncrementalCost(): bigint
  set heapSize(val: number)
  get heapSize(): number
  set heapCost(val: bigint)
  get heapCost(): bigint
  set memOpBaseCost(val: bigint)
  get memOpBaseCost(): bigint
  set altBn128AdditionCost(val: bigint)
  get altBn128AdditionCost(): bigint
  set altBn128MultiplicationCost(val: bigint)
  get altBn128MultiplicationCost(): bigint
  set altBn128PairingOnePairCostFirst(val: bigint)
  get altBn128PairingOnePairCostFirst(): bigint
  set altBn128PairingOnePairCostOther(val: bigint)
  get altBn128PairingOnePairCostOther(): bigint
  set bigModularExponentiationBaseCost(val: bigint)
  get bigModularExponentiationBaseCost(): bigint
  set bigModularExponentiationCostDivisor(val: bigint)
  get bigModularExponentiationCostDivisor(): bigint
  set poseidonCostCoefficientA(val: bigint)
  get poseidonCostCoefficientA(): bigint
  set poseidonCostCoefficientC(val: bigint)
  get poseidonCostCoefficientC(): bigint
  set getRemainingComputeUnitsCost(val: bigint)
  get getRemainingComputeUnitsCost(): bigint
  set altBn128G1Compress(val: bigint)
  get altBn128G1Compress(): bigint
  set altBn128G1Decompress(val: bigint)
  get altBn128G1Decompress(): bigint
  set altBn128G2Compress(val: bigint)
  get altBn128G2Compress(): bigint
  set altBn128G2Decompress(val: bigint)
  get altBn128G2Decompress(): bigint
}
export declare class FeatureSet {
  constructor()
  static allEnabled(): FeatureSet
  isActive(featureId: Uint8Array): boolean
  activatedSlot(featureId: Uint8Array): bigint | null
  toString(): string
}
/**
 * A representation of network time.
 *
 * All members of `Clock` start from 0 upon network boot.
 */
export declare class Clock {
  /**
   * @param slot - The current Slot.
   * @param epochStartTimestamp - The timestamp of the first `Slot` in this `Epoch`.
   * @param epoch - The current epoch.
   * @param leaderScheduleEpoch - The future Epoch for which the leader schedule has most recently been calculated.
   * @param unixTimestamp - The approximate real world time of the current slot.
   */
  constructor(slot: bigint, epochStartTimestamp: bigint, epoch: bigint, leaderScheduleEpoch: bigint, unixTimestamp: bigint)
  /** The current Slot. */
  get slot(): bigint
  set slot(val: bigint)
  /** The current epoch. */
  get epoch(): bigint
  set epoch(val: bigint)
  /** The timestamp of the first `Slot` in this `Epoch`. */
  get epochStartTimestamp(): bigint
  set epochStartTimestamp(val: bigint)
  /** The future Epoch for which the leader schedule has most recently been calculated. */
  get leaderScheduleEpoch(): bigint
  set leaderScheduleEpoch(val: bigint)
  /** The approximate real world time of the current slot. */
  get unixTimestamp(): bigint
  set unixTimestamp(val: bigint)
  toString(): string
}
/** A type to hold data for the EpochRewards sysvar. */
export declare class EpochRewards {
  /**
   * @param distribution_starting_block_height - The starting block height of the rewards distribution in the current epoch
   * @param num_partitions - Number of partitions in the rewards distribution in the current epoch
   * @param parent_blockhash - The blockhash of the parent block of the first block in the epoch
   * @param total_points - The total rewards points calculated for the current epoch
   * @param total_rewards - The total rewards calculated for the current epoch
   * @param distributed_rewards - The rewards currently distributed for the current epoch, in lamports
   * @param active - Whether the rewards period (including calculation and distribution) is active
   */
  constructor(distributionStartingBlockHeight: bigint, numPartitions: bigint, parentBlockhash: string, totalPoints: bigint, totalRewards: bigint, distributedRewards: bigint, active: boolean)
  /**
   * The starting block height of the rewards distribution in the current
   * epoch
   */
  get distributionStartingBlockHeight(): bigint
  set distributionStartingBlockHeight(val: bigint)
  /**
   * Number of partitions in the rewards distribution in the current epoch,
   * used to generate an EpochRewardsHasher
   */
  get numPartitions(): bigint
  set numPartitions(val: bigint)
  /**
   * The blockhash of the parent block of the first block in the epoch, used
   * to seed an EpochRewardsHasher
   */
  get parentBlockhash(): string
  set parentBlockhash(val: string)
  /**
   * The total rewards points calculated for the current epoch, where points
   * equals the sum of (delegated stake * credits observed) for all
   * delegations
   */
  get totalPoints(): bigint
  set totalPoints(val: bigint)
  /**
   * The total rewards calculated for the current epoch. This may be greater
   * than the total `distributed_rewards` at the end of the rewards period,
   * due to rounding and inability to deliver rewards smaller than 1 lamport.
   */
  get totalRewards(): bigint
  set totalRewards(val: bigint)
  /** The rewards currently distributed for the current epoch, in lamports */
  get distributedRewards(): bigint
  set distributedRewards(val: bigint)
  /**
   * Whether the rewards period (including calculation and distribution) is
   * active
   */
  get active(): boolean
  set active(val: boolean)
}
/** Configuration for epochs and slots. */
export declare class EpochSchedule {
  /**
   * @param slots_per_epoch - The maximum number of slots in each epoch.
   * @param leader_schedule_slot_offset - A number of slots before beginning of an epoch to calculate a leader schedule for that epoch.
   * @param warmup - Whether epochs start short and grow.
   * @param first_normal_epoch - The first epoch after the warmup period.
   * @param first_normal_slot - The first slot after the warmup period.
   */
  constructor(slotsPerEpoch: bigint, leaderScheduleSlotOffset: bigint, warmup: boolean, firstNormalEpoch: bigint, firstNormalSlot: bigint)
  /** The maximum number of slots in each epoch. */
  get slotsPerEpoch(): bigint
  set slotsPerEpoch(val: bigint)
  /**
   * A number of slots before beginning of an epoch to calculate
   * a leader schedule for that epoch.
   */
  get leaderScheduleSlotOffset(): bigint
  set leaderScheduleSlotOffset(val: bigint)
  /** Whether epochs start short and grow. */
  get warmup(): boolean
  set warmup(val: boolean)
  /**
   * The first epoch after the warmup period.
   *
   * Basically: `log2(slots_per_epoch) - log2(MINIMUM_SLOTS_PER_EPOCH)`.
   */
  get firstNormalEpoch(): bigint
  set firstNormalEpoch(val: bigint)
  /**
   * The first slot after the warmup period.
   *
   * Basically: `MINIMUM_SLOTS_PER_EPOCH * (2.pow(first_normal_epoch) - 1)`.
   */
  get firstNormalSlot(): bigint
  set firstNormalSlot(val: bigint)
}
/** Configuration of network rent. */
export declare class Rent {
  /**
   * @param lamportsPerByteYear - Rental rate in lamports/byte-year.
   * @param exemptionThreshold - Amount of time (in years) a balance must include rent for the account to be rent exempt.
   * @param burnPercent - The percentage of collected rent that is burned.
   */
  constructor(lamportsPerByteYear: bigint, exemptionThreshold: number, burnPercent: number)
  /** Initialize rent with the default Solana settings. */
  static default(): Rent
  /** Rental rate in lamports/byte-year. */
  get lamportsPerByteYear(): bigint
  set lamportsPerByteYear(val: bigint)
  /** Amount of time (in years) a balance must include rent for the account to be rent exempt. */
  get exemptionThreshold(): number
  set exemptionThreshold(val: number)
  /** The percentage of collected rent that is burned. */
  get burnPercent(): number
  set burnPercent(val: number)
  /**
   * Calculate how much rent to burn from the collected rent.
   *
   * The first value returned is the amount burned. The second is the amount
   * to distribute to validators.
   *
   * @param rentCollected: The amount of rent collected.
   * @returns The amount burned and the amount to distribute to validators.
   */
  calculateBurn(rentCollected: bigint): [bigint, bigint]
  /**
   * Minimum balance due for rent-exemption of a given account data size.
   *
   * Note: a stripped-down version of this calculation is used in
   * ``calculate_split_rent_exempt_reserve`` in the stake program. When this
   * function is updated, eg. when making rent variable, the stake program
   * will need to be refactored.
   *
   * @param dataLen - The account data size.
   * @returns The minimum balance due.
   */
  minimumBalance(dataLen: bigint): bigint
  /** Whether a given balance and data length would be exempt. */
  isExempt(balance: bigint, dataLen: bigint): boolean
  /**
   * Rent due on account's data length with balance.
   *
   * @param balance - The account balance.
   * @param dataLen - The account data length.
   * @param yearsElapsed - Time elapsed in years.
   * @returns The rent due.
   */
  due(balance: bigint, dataLen: bigint, yearsElapsed: number): bigint | null
  /**
   * Rent due for account that is known to be not exempt.
   *
   * @param dataLen - The account data length.
   * @param yearsElapsed - Time elapsed in years.
   * @returns The amount due.
   */
  dueAmount(dataLen: bigint, yearsElapsed: number): bigint
  /**
   * Creates a `Rent` that charges no lamports.
   *
   * This is used for testing.
   *
   */
  static free(): Rent
  /**
   * Creates a `Rent` that is scaled based on the number of slots in an epoch.
   *
   * This is used for testing.
   */
  static withSlotsPerEpoch(slotsPerEpoch: bigint): Rent
  toString(): string
}
export declare class SlotHash {
  slot: bigint
  hash: string
}
/** A bitvector indicating which slots are present in the past epoch. */
export declare class SlotHistory {
  constructor(bits: BigUint64Array, nextSlot: bigint)
  static default(): SlotHistory
  get bits(): BigUint64Array
  set bits(bits: BigUint64Array)
  get nextSlot(): bigint
  set nextSlot(slot: bigint)
  add(slot: bigint): void
  check(slot: bigint): SlotHistoryCheck
  oldest(): bigint
  newest(): bigint
  toString(): string
}
export declare class StakeHistoryEntry {
  /**
   * @param effective - effective stake at this epoch
   * @param activating - sum of portion of stakes not fully warmed up
   * @param effective - requested to be cooled down, not fully deactivated yet
   */
  constructor(effective: bigint, activating: bigint, deactivating: bigint)
  /** effective stake at this epoch */
  get effective(): bigint
  set effective(val: bigint)
  /** sum of portion of stakes not fully warmed up */
  get activating(): bigint
  set activating(val: bigint)
  /** requested to be cooled down, not fully deactivated yet */
  get deactivating(): bigint
  set deactivating(val: bigint)
  toString(): string
}
/** A type to hold data for the StakeHistory sysvar. */
export declare class StakeHistory {
  constructor()
  get(epoch: bigint): StakeHistoryEntry | null
  add(epoch: bigint, entry: StakeHistoryEntry): void
}
export declare class InstructionErrorCustom {
  code: number
  toString(): string
}
export type InstructionErrorBorshIO = InstructionErrorBorshIo
export declare class InstructionErrorBorshIo {
  msg: string
  toString(): string
}
export declare class TransactionErrorInstructionError {
  index: number
  err(): InstructionErrorFieldless | InstructionErrorCustom | InstructionErrorBorshIO
  toString(): string
}
export declare class TransactionErrorDuplicateInstruction {
  index: number
  toString(): string
}
export declare class TransactionErrorInsufficientFundsForRent {
  accountIndex: number
  toString(): string
}
export declare class TransactionErrorProgramExecutionTemporarilyRestricted {
  accountIndex: number
  toString(): string
}
export declare class CompiledInstruction {
  constructor(programIdIndex: number, accounts: Uint8Array, data: Uint8Array)
  programIdIndex(): number
  accounts(): Uint8Array
  data(): Uint8Array
  toString(): string
}
export declare class InnerInstruction {
  instruction(): CompiledInstruction
  stackHeight(): number
  toString(): string
}
export declare class TransactionReturnData {
  programId(): Uint8Array
  data(): Uint8Array
  toString(): string
}
export declare class TransactionMetadata {
  signature(): Uint8Array
  logs(): Array<string>
  innerInstructions(): Array<Array<InnerInstruction>>
  computeUnitsConsumed(): bigint
  returnData(): TransactionReturnData
  toString(): string
}
export declare class FailedTransactionMetadata {
  err(): TransactionErrorFieldless | TransactionErrorInstructionError | TransactionErrorDuplicateInstruction | TransactionErrorInsufficientFundsForRent | TransactionErrorProgramExecutionTemporarilyRestricted
  meta(): TransactionMetadata
  toString(): string
}
export declare class AddressAndAccount {
  address: Uint8Array
  account(): Account
}
export declare class SimulatedTransactionInfo {
  meta(): TransactionMetadata
  postAccounts(): Array<AddressAndAccount>
  toString(): string
}
export declare class LiteSvm {
  /** Creates the basic test environment. */
  constructor()
  static default(): LiteSvm
  setComputeBudget(budget: ComputeBudget): void
  /** Enables or disables sigverify */
  setSigverify(sigverify: boolean): void
  /** Enables or disables the blockhash check */
  setBlockhashCheck(check: boolean): void
  /** Includes the default sysvars */
  setSysvars(): void
  /** Changes the default builtins */
  setBuiltins(featureSet?: FeatureSet | undefined | null): void
  /** Changes the initial lamports in LiteSVM's airdrop account */
  setLamports(lamports: bigint): void
  /** Includes the standard SPL programs */
  setSplPrograms(): void
  /**
   * Changes the capacity of the transaction history.
   * Set this to 0 to disable transaction history and allow duplicate transactions.
   */
  setTransactionHistory(capacity: bigint): void
  setLogBytesLimit(limit?: bigint | undefined | null): void
  setPrecompiles(featureSet?: FeatureSet | undefined | null): void
  /** Returns minimum balance required to make an account with specified data length rent exempt. */
  minimumBalanceForRentExemption(dataLen: bigint): bigint
  /** Returns all information associated with the account of the provided pubkey. */
  getAccount(pubkey: Uint8Array): Account | null
  /** Sets all information associated with the account of the provided pubkey. */
  setAccount(pubkey: Uint8Array, data: Account): void
  /** Gets the balance of the provided account pubkey. */
  getBalance(pubkey: Uint8Array): bigint | null
  /** Gets the latest blockhash. */
  latestBlockhash(): string
  /** Gets a transaction from the transaction history. */
  getTransaction(signature: Uint8Array): TransactionMetadata | FailedTransactionMetadata | null
  /** Airdrops the account with the lamports specified. */
  airdrop(pubkey: Uint8Array, lamports: bigint): TransactionMetadata | FailedTransactionMetadata | null
  /** Adds am SBF program to the test environment from the file specified. */
  addProgramFromFile(programId: Uint8Array, path: string): void
  /** Adds am SBF program to the test environment. */
  addProgram(programId: Uint8Array, programBytes: Uint8Array): void
  sendLegacyTransaction(txBytes: Uint8Array): TransactionMetadata | FailedTransactionMetadata
  sendVersionedTransaction(txBytes: Uint8Array): TransactionMetadata | FailedTransactionMetadata
  simulateLegacyTransaction(txBytes: Uint8Array): SimulatedTransactionInfo | FailedTransactionMetadata
  simulateVersionedTransaction(txBytes: Uint8Array): SimulatedTransactionInfo | FailedTransactionMetadata
  /** Expires the current blockhash */
  expireBlockhash(): void
  /** Warps the clock to the specified slot */
  warpToSlot(slot: bigint): void
  getComputeBudget(): ComputeBudget | null
  getSigverify(): boolean
  getClock(): Clock
  setClock(clock: Clock): void
  getRent(): Rent
  setRent(rent: Rent): void
  getEpochRewards(): EpochRewards
  setEpochRewards(rewards: EpochRewards): void
  getEpochSchedule(): EpochSchedule
  setEpochSchedule(schedule: EpochSchedule): void
  getLastRestartSlot(): bigint
  setLastRestartSlot(slot: bigint): void
  getSlotHashes(): Array<SlotHash>
  setSlotHashes(hashes: Array<SlotHash>): void
  getSlotHistory(): SlotHistory
  setSlotHistory(history: SlotHistory): void
  getStakeHistory(): StakeHistory
  setStakeHistory(history: StakeHistory): void
}
