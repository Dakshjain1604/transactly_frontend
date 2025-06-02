import { RefObject } from "react";

interface FormInputProps {
    label: string;
    type: string;
    placeholder: string;
    reference?: RefObject<HTMLInputElement | null>;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

export function FormInput({ label, type, placeholder, reference, value, onChange, error }: FormInputProps) {
    return (
        <div className="w-4/5">
            <label className="block text-sm font-medium text-blue-700 mb-1">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-blue-200 bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                ref={reference}
                value={value}
                onChange={onChange}
            />
            {error && (
                <div className="text-red-600 text-sm mt-1">
                    {error}
                </div>
            )}
        </div>
    );
} 