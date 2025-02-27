import { model, Schema } from 'mongoose';

const getCurrentDate = () => {
    const now = new Date();
    // Приведення дати до рядка у форматі 'YYYY-MM-DD HH:mm'
    return now.toISOString().slice(0, 16).replace('T', ' ');
};

const waterSchema = new Schema(
{
    volume: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true,
        default: getCurrentDate
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
},

  { timestamps: true, versionKey: false },
)


export const WaterCollection = model('water', waterSchema);


