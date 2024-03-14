import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class cartas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  // @OneToMany(() => tbl_usuarios, (usuario) => usuario.pais)
  // usuario: tbl_usuarios[];
}
