import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAutoStackIdToStack1733823913688 implements MigrationInterface {
    name = 'AddAutoStackIdToStack1733823913688'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset_stack" ADD "autoStackId" text`);
        await queryRunner.query(`ALTER TABLE "asset_stack" ADD CONSTRAINT "UQ_fb9d5d9b89ce6ddf63b39d07c16" UNIQUE ("autoStackId")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "asset_stack" DROP CONSTRAINT "UQ_fb9d5d9b89ce6ddf63b39d07c16"`);
        await queryRunner.query(`ALTER TABLE "asset_stack" DROP COLUMN "autoStackId"`);
    }

}
