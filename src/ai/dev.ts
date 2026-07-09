import { config } from 'dotenv';
config();

import '@/ai/flows/generate-flag-check-code.ts';
import '@/ai/flows/system-health-check.ts';
import '@/ai/flows/smart-debugger-flow.ts';
import '@/ai/flows/live-telemetry-flow.ts';
