import * as bcrypt from 'bcrypt';

// Utility to handle passwords securely
export class BcryptUtil {
  // Converts "123456" into something like "$2b$10$abcd1234..."
  static async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  // Compares "123456" with "$2b$10$abcd1234..." and returns if they match
  static async comparePassword(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  }
}