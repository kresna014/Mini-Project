/*
  Warnings:

  - You are about to alter the column `nominal_discount` on the `promotion` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - Added the required column `type_event` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proof` to the `promotion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `promotion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` ADD COLUMN `type_event` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `promotion` ADD COLUMN `proof` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL,
    MODIFY `nominal_discount` DOUBLE NOT NULL;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `referal_number` INTEGER NOT NULL,
    `poin` INTEGER NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `phone_number` INTEGER NOT NULL,
    `isVerify` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Eo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creator` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `isVerify` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
