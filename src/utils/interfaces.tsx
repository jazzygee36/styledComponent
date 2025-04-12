export interface InputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

export interface buttonProps {
  title?: string;
}

export interface DashboardProps {
  children: React.ReactNode;
}
