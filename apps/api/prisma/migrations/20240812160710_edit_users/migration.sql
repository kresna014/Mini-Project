/*
  Warnings:

  - You are about to drop the column `referal_number` on the `users` table. All the data in the column will be lost.
  - Added the required column `referal_code` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `referal_number`,
    ADD COLUMN `referal_code` VARCHAR(191) NOT NULL;
