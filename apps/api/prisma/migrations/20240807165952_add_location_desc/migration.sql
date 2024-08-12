/*
  Warnings:

  - Added the required column `location_description` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` ADD COLUMN `location_description` VARCHAR(191) NOT NULL;
