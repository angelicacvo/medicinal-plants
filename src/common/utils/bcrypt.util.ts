import * as bcrypt from 'bcrypt';

// Utilidad para manejar contraseñas de forma segura
export class BcryptUtil {
  // Convierte "123456" en algo como "$2b$10$abcd1234..."
  static async encriptarPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  // Compara "123456" con "$2b$10$abcd1234..." y dice si son iguales
  static async compararPassword(passwordTextoPlano: string, passwordEncriptado: string): Promise<boolean> {
    return await bcrypt.compare(passwordTextoPlano, passwordEncriptado);
  }
}