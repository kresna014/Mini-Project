/*
  Warnings:

  - You are about to drop the `samples` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `samples`;

-- CreateTable
CREATE TABLE `event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tittle` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `time_event` DATETIME(3) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `available_seats` INTEGER NOT NULL,
    `is_paid` INTEGER NOT NULL,
    `price_event` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `promotion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_event` INTEGER NOT NULL,
    `code_promotion` VARCHAR(191) NOT NULL,
    `max_claim` INTEGER NOT NULL,
    `startdate_discount` DATETIME(3) NOT NULL,
    `enddate_discount` DATETIME(3) NOT NULL,
    `nominal_discount` INTEGER NOT NULL,
    `type_discount` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_event` INTEGER NOT NULL,
    `tickets` VARCHAR(191) NOT NULL,
    `id_promotion` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `total_price` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reviews` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_event` INTEGER NOT NULL,
    `id_transaction` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `rate` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
