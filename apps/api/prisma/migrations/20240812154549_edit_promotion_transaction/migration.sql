/*
  Warnings:

  - You are about to drop the column `proof` on the `promotion` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `promotion` table. All the data in the column will be lost.
  - Added the required column `proof` to the `transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `promotion` DROP COLUMN `proof`,
    DROP COLUMN `status`;

-- AlterTable
ALTER TABLE `transaction` ADD COLUMN `proof` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL;
