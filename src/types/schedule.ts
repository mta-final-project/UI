export interface ICourseInfo {
  subject: string;
  semester: number;
  department: string;
  credit_points: number;
}

export interface ICourse extends ICourseInfo {
  id: string;
  lectures: IGroup[];
  exercises: IGroup[];
}

export interface IGroupInfo {
  group_id: number;
  description: string;
  lecturer: string;
  type: {
    number: number;
    description: string | null;
  };
}

export interface IGroup extends IGroupInfo {
  lessons: ILesson[];
}

export interface ILesson {
  day: number;
  start_time: string;
  end_time: string;
  classroom: string;
}


export interface IGroupWithCourse extends IGroup {
  course: ICourseInfo
}

export interface ISchedule {
  groups: IGroupWithCourse[];
}
