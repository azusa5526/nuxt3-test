import mongoose from 'mongoose';
import { ITopic } from '../../types/index';

const schema = new mongoose.Schema<ITopic>();

export default mongoose.model<ITopic>('topic', schema);
