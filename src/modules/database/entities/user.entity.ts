import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users' })
export class TeleUser {
  @PrimaryColumn({ type: 'varchar', name: 'id', nullable: false })
  id: string;

  @Column({ type: 'nvarchar', name: 'name', nullable: false })
  name: string;

  @Column({ type: 'datetime2', name: 'createdtime', default: 'GETDATE()' })
  createdtime: Date;

  @Column({ type: 'datetime2', name: 'updatedtime', default: 'GETDATE()' })
  updatedtime: Date;

  @Column({ type: 'datetime2', name: 'deletetime', default: 'GETDATE()' })
  deletetime: Date;
}
