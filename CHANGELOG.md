# @usedapp/example

## 0.2.1

### Patch Changes

- 99ffafd: Update yarn.lock and add missing dependencies
- Updated dependencies [99ffafd]
  - @usedapp/core@0.3.2

## 0.2.0

### Minor Changes

- 7a74be4: New features:
  โ๏ธ Add hook for sending transactions to blockchain
  ๐ฌ Add useNotifications and useTransactions hooks
  ๐ฅง Add shortenTransactionHash helper

  Docs:
  ๐ค Create transactions and notifications example
  ๐ Add activate method in getting-started guide
  ๐ค Update config example

  Breaking changes:
  ๐งท Reorder token hooks arguments

  Fixes:
  ๐ช Move ethereum-waffle to devDependencies

### Patch Changes

- Updated dependencies [67b2dda]
- Updated dependencies [7a74be4]
  - @usedapp/core@0.3.0

## 0.1.1

### Patch Changes

- 8b8fb81: ๐งน General clean-up

  - Introduce EthersProvider and activateBrowserWallet
  - Introduce Config, ConfigProvider and useConfig
  - Fix Goerli name
  - Add missing MULTICALL_ADDRESSES
  - Update docs structure and README

- 9506ad8: Add ability to specify a background chain that will be used before wallet is connected.
- Updated dependencies [8b8fb81]
- Updated dependencies [9506ad8]
  - @usedapp/core@0.1.4
