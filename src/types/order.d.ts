export interface OrderItemType {
    id: string;
    createdAt: string;
    country?: string;
    firstName?: string;
    lastName?: string;
    units?: number;
    isPremium?: boolean;
}