export interface ICourse {
    id: string;
    subject: string;
    semester: number;
    department: string;
    credit_points: number;
    lectures: IGroup[];
    exercises: IGroup[];
  }
  
  export interface IGroup {
    group_id: number;
    description: string;
    lecturer: string;
    type: {
      number: number;
      description: string | null;
    };
    lessons: ILesson[];
  }
  
  export interface ILesson {
    day: number;
    start_time: string;
    end_time: string;
    classroom: string;
  }