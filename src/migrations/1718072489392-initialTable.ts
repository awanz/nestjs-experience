import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialTable1718072489392 implements MigrationInterface {
    name = 'InitialTable1718072489392'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar(255) NOT NULL, "name" nvarchar(255) NOT NULL, "createdtime" datetime2 NOT NULL CONSTRAINT "DF_6bba8d3f144e9a05062624a1ebd" DEFAULT 'GETDATE()', "updatedtime" datetime2 NOT NULL CONSTRAINT "DF_7867df3da73aa6b67b7be32cc3d" DEFAULT 'GETDATE()', "deletetime" datetime2 NOT NULL CONSTRAINT "DF_38019014b973a9279d7326c0bcb" DEFAULT 'GETDATE()', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
