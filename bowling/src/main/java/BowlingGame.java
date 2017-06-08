import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class BowlingGame {

    public static int getBowlingScore(String bowlingCode) {
        String[] splitLast = bowlingCode.split("\\|\\|");

        String normal = splitLast[0];
        String extra;
        int extraOne = 0;
        int extraTwo = 0;
        if (bowlingCode.length() - normal.length() == 2) {
            extra = null;
        } else {
            extra = splitLast[1];
        }

        int[] first = new int[10];
        int[] second = new int[10];

        String[] flag = new String[20];

        String[] splitNormal = normal.split("\\|");

        for (int i = 0; i <= splitNormal.length - 1; i++) {

            if (splitNormal[i].length() == 1) {
                first[i] = 10;
                second[i] = 0;
                flag[i] = "strike";
            } else {

                String[] oneGrade = splitNormal[i].split("");
                if (isInteger(oneGrade[0])) {
                    first[i] = Integer.valueOf(oneGrade[0]);
                    if (isInteger(oneGrade[1])) {
                        second[i] = Integer.valueOf(oneGrade[1]);
                        flag[i] = "neither";
                    } else if (isMiss(oneGrade[1])) {
                        second[i] = 0;
                        flag[i] = "neither";
                    } else if (isSpare(oneGrade[1])) {
                        second[i] = 10 - first[i];
                        flag[i] = "spare";

                    }
                } else {
                    first[i] = 0;
                    if (isInteger(oneGrade[1])) {
                        second[i] = Integer.valueOf(oneGrade[1]);
                        flag[i] = "neither";

                    } else if (isSpare(oneGrade[1])) {
                        second[i] = 10;
                        flag[i] = "spare";

                    } else {
                        second[i] = 0;
                        flag[i] = "neither";

                    }
                }

            }

        }

        int[] oneGradeScore = new int[10];

        for (int j = 0; j <= 7; j++) {

            if (flag[j] == "strike") {
                oneGradeScore[j] = first[j] + second[j] + first[j + 1] + second[j + 1];
                if (flag[j + 1] == "strike") {
                    oneGradeScore[j] += first[j + 2] + second[j + 2];
                }
            } else if (flag[j] == "spare") {
                oneGradeScore[j] = first[j] + second[j] + first[j + 1];
            } else {
                oneGradeScore[j] = first[j] + second[j];
            }
        }

        String[] splitExtra;
        if (extra != null && extra.length() > 1) {
            splitExtra = extra.split("");
            if (splitExtra[0].equals("X")) {
                extraOne = 10;
                if (splitExtra[1].equals("X")) {
                    extraTwo = 10;
                }
                if (isInteger(splitExtra[1])) {
                    extraOne += Integer.valueOf(splitExtra[0]);
                }
            }
            if (isInteger(splitExtra[0])) {
                extraOne += Integer.valueOf(splitExtra[0]);
            }
            if (isInteger(splitExtra[1])) {
                extraTwo += Integer.valueOf(splitExtra[1]);
            }

        } else if (extra != null && extra.length() == 1) {

            if (isInteger(extra)) {
                extraOne += Integer.valueOf(extra);
            }
        }

        if (flag[8] == "strike") {
            oneGradeScore[8] = first[8] + second[8] + first[9] + second[9];
            if (flag[9] == "strike") {
                oneGradeScore[8] += extraOne;
            }
        } else if (flag[8] == "spare") {
            oneGradeScore[8] = first[8] + second[8] + first[9];
        } else {
            oneGradeScore[8] = first[8] + second[8];
        }

        if (flag[9] == "strike") {
            oneGradeScore[9] = first[9] + second[9] + extraOne + extraTwo;
        } else if (flag[9] == "spare") {
            oneGradeScore[9] = first[9] + second[9] + extraOne;
        } else {
            oneGradeScore[9] = first[9] + second[9];
        }

        for (int n = 0; n < oneGradeScore.length; n++) {
//            System.out.println(oneGradeScore[n]);
        }
        int sumScore = 0;
        for (int k = 0; k <= 9; k++) {
            sumScore += oneGradeScore[k];
        }

        return sumScore;

    }

    public static boolean isInteger(String input) {
        Matcher mer = Pattern.compile("^[+-]?[0-9]+$").matcher(input);
        return mer.find();
    }

    public static boolean isMiss(String input) {
        if (input.equals("-")) {
            return true;
        }
        return false;
    }

    public static boolean isSpare(String input) {
        if (input.equals("/")) {
            return true;
        }
        return false;
    }


    public static void main(String[] args) {
        String input1 = "X|X|X|X|X|X|X|X|X|X||XX";
        String input2 = "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5";
        String input3 = "9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||";
        String input4 = "X|7/|9-|X|-8|8/|-6|X|X|X||81";

        getBowlingScore(input1);
        getBowlingScore(input2);
        getBowlingScore(input3);
        getBowlingScore(input4);
    }
}
