/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

/* auto-generated by NAPI-RS */

const { existsSync, readFileSync } = require('fs')
const { join } = require('path')

const { platform, arch } = process

let nativeBinding = null
let localFileExisted = false
let loadError = null

function isMusl() {
  // For Node 10
  if (!process.report || typeof process.report.getReport !== 'function') {
    try {
      const lddPath = require('child_process').execSync('which ldd').toString().trim()
      return readFileSync(lddPath, 'utf8').includes('musl')
    } catch (e) {
      return true
    }
  } else {
    const { glibcVersionRuntime } = process.report.getReport().header
    return !glibcVersionRuntime
  }
}

switch (platform) {
  case 'android':
    switch (arch) {
      case 'arm64':
        localFileExisted = existsSync(join(__dirname, 'litesvm.android-arm64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./litesvm.android-arm64.node')
          } else {
            nativeBinding = require('litesvm-android-arm64')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm':
        localFileExisted = existsSync(join(__dirname, 'litesvm.android-arm-eabi.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./litesvm.android-arm-eabi.node')
          } else {
            nativeBinding = require('litesvm-android-arm-eabi')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Android ${arch}`)
    }
    break
  case 'win32':
    switch (arch) {
      case 'x64':
        localFileExisted = existsSync(
          join(__dirname, 'litesvm.win32-x64-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./litesvm.win32-x64-msvc.node')
          } else {
            nativeBinding = require('litesvm-win32-x64-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'ia32':
        localFileExisted = existsSync(
          join(__dirname, 'litesvm.win32-ia32-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./litesvm.win32-ia32-msvc.node')
          } else {
            nativeBinding = require('litesvm-win32-ia32-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm64':
        localFileExisted = existsSync(
          join(__dirname, 'litesvm.win32-arm64-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./litesvm.win32-arm64-msvc.node')
          } else {
            nativeBinding = require('litesvm-win32-arm64-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Windows: ${arch}`)
    }
    break
  case 'darwin':
    localFileExisted = existsSync(join(__dirname, 'litesvm.darwin-universal.node'))
    try {
      if (localFileExisted) {
        nativeBinding = require('./litesvm.darwin-universal.node')
      } else {
        nativeBinding = require('litesvm-darwin-universal')
      }
      break
    } catch {}
    switch (arch) {
      case 'x64':
        localFileExisted = existsSync(join(__dirname, 'litesvm.darwin-x64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./litesvm.darwin-x64.node')
          } else {
            nativeBinding = require('litesvm-darwin-x64')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm64':
        localFileExisted = existsSync(
          join(__dirname, 'litesvm.darwin-arm64.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./litesvm.darwin-arm64.node')
          } else {
            nativeBinding = require('litesvm-darwin-arm64')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on macOS: ${arch}`)
    }
    break
  case 'freebsd':
    if (arch !== 'x64') {
      throw new Error(`Unsupported architecture on FreeBSD: ${arch}`)
    }
    localFileExisted = existsSync(join(__dirname, 'litesvm.freebsd-x64.node'))
    try {
      if (localFileExisted) {
        nativeBinding = require('./litesvm.freebsd-x64.node')
      } else {
        nativeBinding = require('litesvm-freebsd-x64')
      }
    } catch (e) {
      loadError = e
    }
    break
  case 'linux':
    switch (arch) {
      case 'x64':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'litesvm.linux-x64-musl.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./litesvm.linux-x64-musl.node')
            } else {
              nativeBinding = require('litesvm-linux-x64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'litesvm.linux-x64-gnu.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./litesvm.linux-x64-gnu.node')
            } else {
              nativeBinding = require('litesvm-linux-x64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'arm64':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'litesvm.linux-arm64-musl.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./litesvm.linux-arm64-musl.node')
            } else {
              nativeBinding = require('litesvm-linux-arm64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'litesvm.linux-arm64-gnu.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./litesvm.linux-arm64-gnu.node')
            } else {
              nativeBinding = require('litesvm-linux-arm64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'arm':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'litesvm.linux-arm-musleabihf.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./litesvm.linux-arm-musleabihf.node')
            } else {
              nativeBinding = require('litesvm-linux-arm-musleabihf')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'litesvm.linux-arm-gnueabihf.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./litesvm.linux-arm-gnueabihf.node')
            } else {
              nativeBinding = require('litesvm-linux-arm-gnueabihf')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'riscv64':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'litesvm.linux-riscv64-musl.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./litesvm.linux-riscv64-musl.node')
            } else {
              nativeBinding = require('litesvm-linux-riscv64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'litesvm.linux-riscv64-gnu.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./litesvm.linux-riscv64-gnu.node')
            } else {
              nativeBinding = require('litesvm-linux-riscv64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 's390x':
        localFileExisted = existsSync(
          join(__dirname, 'litesvm.linux-s390x-gnu.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./litesvm.linux-s390x-gnu.node')
          } else {
            nativeBinding = require('litesvm-linux-s390x-gnu')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Linux: ${arch}`)
    }
    break
  default:
    throw new Error(`Unsupported OS: ${platform}, architecture: ${arch}`)
}

if (!nativeBinding) {
  if (loadError) {
    throw loadError
  }
  throw new Error(`Failed to load native binding`)
}

const { Account, ComputeBudget, FeatureSet, Clock, EpochRewards, EpochSchedule, Rent, SlotHash, SlotHistoryCheck, SlotHistory, StakeHistoryEntry, StakeHistory, InstructionErrorCustom, InstructionErrorBorshIo, InstructionErrorFieldless, TransactionErrorFieldless, TransactionErrorInstructionError, TransactionErrorDuplicateInstruction, TransactionErrorInsufficientFundsForRent, TransactionErrorProgramExecutionTemporarilyRestricted, CompiledInstruction, InnerInstruction, TransactionReturnData, TransactionMetadata, FailedTransactionMetadata, AddressAndAccount, SimulatedTransactionInfo, LiteSvm } = nativeBinding

module.exports.Account = Account
module.exports.ComputeBudget = ComputeBudget
module.exports.FeatureSet = FeatureSet
module.exports.Clock = Clock
module.exports.EpochRewards = EpochRewards
module.exports.EpochSchedule = EpochSchedule
module.exports.Rent = Rent
module.exports.SlotHash = SlotHash
module.exports.SlotHistoryCheck = SlotHistoryCheck
module.exports.SlotHistory = SlotHistory
module.exports.StakeHistoryEntry = StakeHistoryEntry
module.exports.StakeHistory = StakeHistory
module.exports.InstructionErrorCustom = InstructionErrorCustom
module.exports.InstructionErrorBorshIo = InstructionErrorBorshIo
module.exports.InstructionErrorFieldless = InstructionErrorFieldless
module.exports.TransactionErrorFieldless = TransactionErrorFieldless
module.exports.TransactionErrorInstructionError = TransactionErrorInstructionError
module.exports.TransactionErrorDuplicateInstruction = TransactionErrorDuplicateInstruction
module.exports.TransactionErrorInsufficientFundsForRent = TransactionErrorInsufficientFundsForRent
module.exports.TransactionErrorProgramExecutionTemporarilyRestricted = TransactionErrorProgramExecutionTemporarilyRestricted
module.exports.CompiledInstruction = CompiledInstruction
module.exports.InnerInstruction = InnerInstruction
module.exports.TransactionReturnData = TransactionReturnData
module.exports.TransactionMetadata = TransactionMetadata
module.exports.FailedTransactionMetadata = FailedTransactionMetadata
module.exports.AddressAndAccount = AddressAndAccount
module.exports.SimulatedTransactionInfo = SimulatedTransactionInfo
module.exports.LiteSvm = LiteSvm
