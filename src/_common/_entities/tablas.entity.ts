import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { cartas } from './cartas.entity';

@Entity()
export class tablas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToOne(() => cartas)
  @JoinColumn({name: "carta1"})
  carta1: cartas;

  @OneToOne(() => cartas)
  @JoinColumn({name: "carta2"})
  carta2: cartas;

  @OneToOne(() => cartas)
  @JoinColumn({name: "carta3"})
  carta3: cartas;
  
  @OneToOne(() => cartas)
  @JoinColumn({name: "carta4"})
  carta4: cartas;
  
  @OneToOne(() => cartas)
  @JoinColumn({name: "carta5"})
  carta5: cartas;

  @OneToOne(() => cartas)
  @JoinColumn({name: "carta6"})
  carta6: cartas;

  @OneToOne(() => cartas)
  @JoinColumn({name: "carta7"})
  carta7: cartas;

  @OneToOne(() => cartas)
  @JoinColumn({name: "carta8"})
  carta8: cartas;

  @OneToOne(() => cartas)
  @JoinColumn({name: "carta9"})
  carta9: cartas;

  @OneToOne(() => cartas)
  @JoinColumn({name: "carta10"})
  carta10: cartas;

  @OneToOne(() => cartas)
  @JoinColumn({name: "carta11"})
  carta11: cartas;

  @OneToOne(() => cartas)
  @JoinColumn({name: "carta12"})
  carta12: cartas;
  
}
