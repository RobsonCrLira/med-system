import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
class Medico {
  @PrimaryColumn()
  id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 7 })
  crm: number;

  @Column({ length: 11 })
  telefone: number;

  @Column({ length: 8 })
  cep: number;

  @Column()
  especialidade: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Medico };
