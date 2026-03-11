/**
 *
 *      WORKSHOP SEMINAR PORTAL COMPLETE JAVA CONSOLE APP
 *      KL University, Hyderabad mohanapriya@klh.edu.in
 *      All 14 Features + DSA (CO1-CO4) + Admin Dashboard
 *
 *
 * HOW TO RUN:
 *    javac WorkshopPortal.java
 *    java WorkshopPortal
 */

import java.util.*;
import java.util.stream.*;
import java.time.*;
import java.time.format.*;

public class WorkshopPortal {

    static Scanner sc = new Scanner(System.in);

    //
    // DATA MODELS
    //

    static class Workshop {
        int id; String title, category, instructor, date, time, venue, type, description;
        int totalSeats, takenSeats; double rating; int ratingCount;
        List<Review> reviews = new ArrayList<>();
        List<QAPost> qaList   = new ArrayList<>();

        Workshop(int id, String title, String cat, String instructor,
                 String date, String time, String venue, String type,
                 int total, int taken, String desc) {
            this.id=id; this.title=title; this.category=cat;
            this.instructor=instructor; this.date=date; this.time=time;
            this.venue=venue; this.type=type; this.totalSeats=total;
            this.takenSeats=taken; this.description=desc;
            this.rating=4.5; this.ratingCount=12;
        }
        int seatsLeft()    { return totalSeats - takenSeats; }
        double fillPct()   { return (double)takenSeats/totalSeats*100; }
        boolean isFull()   { return takenSeats >= totalSeats; }
        boolean lowSeats() { return seatsLeft() > 0 && seatsLeft() < 10; }
    }

    static class Student {
        String name, email, rollNo, password;
        List<Integer> registeredWsIds = new ArrayList<>();
        List<Badge>   badges          = new ArrayList<>();
        int loginCount = 0;

        Student(String name, String email, String rollNo, String password) {
            this.name=name; this.email=email; this.rollNo=rollNo; this.password=password;
        }
    }

    static class Review {
        String studentName; int stars; String comment; String date;
        Review(String n, int s, String c, String d) { studentName=n; stars=s; comment=c; date=d; }
    }

    static class QAPost {
        int id; String author, question; int likes; List<String> answers = new ArrayList<>();
        QAPost(int id, String a, String q) { this.id=id; author=a; question=q; }
    }

    static class Notification {
        int id; String message, type; boolean read;
        Notification(int id, String msg, String type) { this.id=id; message=msg; this.type=type; }
    }

    static class Badge {
        String name, emoji, description;
        Badge(String n, String e, String d) { name=n; emoji=e; description=d; }
    }

    //
    // APPLICATION STATE
    //

    static List<Workshop>     workshops     = new ArrayList<>();
    static List<Student>      students      = new ArrayList<>();
    static Queue<Notification> notifQueue   = new LinkedList<>();   // CO3 - Queue FIFO
    static Map<Integer, Workshop> wsIndex   = new HashMap<>();      // CO4 - HashMap O(1)
    static Deque<String>      navHistory    = new ArrayDeque<>();   // CO3 - Deque
    static Student            currentUser   = null;
    static boolean            isAdmin       = false;
    static int                notifIdSeq    = 1;
    static int                qaIdSeq       = 1;

    static final String ADMIN_EMAIL = "mohanapriya@klh.edu.in";
    static final String ADMIN_PASS = "admin123";

    //
    // SEED DATA
    //

    static void seedData() {
        // 8 Workshops
        workshops.add(new Workshop(1,"Machine Learning Fundamentals","Tech","Dr. Rajesh Kumar",
            "Mar 15, 2025","10:00 AM","Seminar Hall A","Offline",40,32,
            "Dive into ML algorithms, supervised learning, neural networks and hands-on Python projects."));
        workshops.add(new Workshop(2,"Cybersecurity Basics","Tech","Prof. Meera Nair",
            "Mar 18, 2025","9:00 AM","Online (Zoom)","Online",50,15,
            "Learn ethical hacking, network security, cryptography and real-world threat analysis."));
        workshops.add(new Workshop(3,"Effective Communication Skills","Soft","Dr. Tina Menon",
            "Mar 20, 2025","11:00 AM","Hall B","Offline",30,27,
            "Master verbal, non-verbal communication, active listening and presentation skills."));
        workshops.add(new Workshop(4,"Data Science with Python","Data","Dr. Suresh Iyer",
            "Mar 22, 2025","10:00 AM","Online (Google Meet)","Online",50,28,
            "Pandas, NumPy, Matplotlib, Seaborn full data science pipeline with real datasets."));
        workshops.add(new Workshop(5,"Web Development Bootcamp","Tech","Prof. Anjali Singh",
            "Mar 25, 2025","9:00 AM","Online (Zoom)","Online",50,20,
            "HTML, CSS, JavaScript, React build full responsive websites from scratch."));
        workshops.add(new Workshop(6,"UI/UX Design Fundamentals","Design","Dr. Kavya Reddy",
            "Mar 27, 2025","2:00 PM","Design Lab","Offline",35,20,
            "Figma, wireframing, prototyping, user research and design thinking methodology."));
        workshops.add(new Workshop(7,"Cloud Computing with AWS","Data","Mr. Vikram Joshi",
            "Apr 2, 2025","10:00 AM","Online (Google Meet)","Online",50,10,
            "EC2, S3, Lambda, RDS architect scalable cloud solutions with AWS services."));
        workshops.add(new Workshop(8,"Public Speaking Masterclass","Soft","Prof. Ritu Sharma",
            "Apr 5, 2025","3:00 PM","Auditorium","Offline",50,30,
            "Overcome stage fright, structure speeches, use storytelling and command any audience."));

        // Build HashMap index for O(1) lookup (CO4)
        workshops.forEach(w -> wsIndex.put(w.id, w));

        // Seed reviews
        workshops.get(0).reviews.add(new Review("Priya S.",5,"Amazing workshop!","Mar 16,2025"));
        workshops.get(0).reviews.add(new Review("Rohit K.",4,"Very informative.","Mar 16,2025"));
        workshops.get(1).reviews.add(new Review("Sneha P.",5,"Loved it!","Mar 19,2025"));
        workshops.get(2).reviews.add(new Review("Arjun N.",4,"Good content.","Mar 21,2025"));

        // Seed Q&A
        QAPost q1 = new QAPost(qaIdSeq++, "Priya S.", "Is this for beginners?");
        q1.answers.add("Yes! No prior experience needed. Dr. Rajesh Kumar");
        q1.likes = 5;
        workshops.get(0).qaList.add(q1);

        QAPost q2 = new QAPost(qaIdSeq++, "Rohit K.", "Will recording be shared?");
        q2.answers.add("Yes, recordings shared within 24 hours. Admin");
        q2.likes = 3;
        workshops.get(0).qaList.add(q2);

        // 10 Students
        String[][] studentData = {
            {"Priya Sharma","priya.sharma2024@klh.edu.in","2024CS001","pass123"},
            {"Rohit Kumar","rohit.kumar2024@klh.edu.in","2024EC042","pass123"},
            {"Sneha Patel","sneha.patel2024@klh.edu.in","2024ME019","pass123"},
            {"Arjun Nair","arjun.nair2024@klh.edu.in","2024CE007","pass123"},
            {"Divya Rao","divya.rao2024@klh.edu.in","2024IT031","pass123"},
            {"Kiran Mehta","kiran.mehta2024@klh.edu.in","2024CS088","pass123"},
            {"Anika Roy","anika.roy2024@klh.edu.in","2024EC015","pass123"},
            {"Vikram Singh","vikram.singh2024@klh.edu.in","2024ME052","pass123"},
            {"Meera Das","meera.das2024@klh.edu.in","2024CS033","pass123"},
            {"Ravi Verma","ravi.verma2024@klh.edu.in","2024IT009","pass123"}
        };
        for (String[] d : studentData) {
            Student s = new Student(d[0], d[1], d[2], d[3]);
            students.add(s);
        }
        // Pre-register some students
        students.get(0).registeredWsIds.addAll(Arrays.asList(1,3));
        students.get(1).registeredWsIds.addAll(Arrays.asList(2));
        students.get(2).registeredWsIds.addAll(Arrays.asList(4));

        // Seed notifications
        addNotification(" Seat Alert: 'Effective Communication' has only 3 seats left!","alert");
        addNotification(" New Workshop: Cloud Computing with AWS is now open!","info");
        addNotification(" Reminder: Machine Learning workshop tomorrow at 10 AM","reminder");
        addNotification(" Badge unlocked: 'First Step' register for your first workshop!","badge");
        addNotification(" Registration closes in 2 days for Cybersecurity Basics","info");
    }

    static void addNotification(String msg, String type) {
        notifQueue.offer(new Notification(notifIdSeq++, msg, type));
    }

    //
    // UI HELPERS
    //

    static void cls() { System.out.println("\n\n\n"); }
    static void line() { System.out.println(""); }
    static void dline(){ System.out.println(""); }

    static void banner(String title) {
        dline();
        System.out.printf(" %s%n", title);
        dline();
    }

    static void header() {
        System.out.println("");
        System.out.println("            WorkShop Hub KL University            ");
        System.out.println("          Hyderabad, Bowrampet 500 043              ");
        System.out.printf( " User: %-44s%n",
            currentUser != null ? currentUser.name + " (" + currentUser.rollNo + ")"
                                : (isAdmin ? "ADMIN Dr. Mohanapriya" : "Guest"));
        System.out.printf( " Notifications: %-5d                                %n", notifQueue.size());
        System.out.println("");
    }

    static String input(String prompt) {
        System.out.print(prompt);
        return sc.nextLine().trim();
    }

    static int inputInt(String prompt) {
        System.out.print(prompt);
        try { int v = Integer.parseInt(sc.nextLine().trim()); return v; }
        catch (Exception e) { return -1; }
    }

    static void press() { input("\n    Press Enter to continue..."); }

    static void workshopCard(Workshop w) {
        line();
        System.out.printf(" [%d] %s%n", w.id, w.title);
        System.out.printf("       %s   %s%n", w.date, w.time);
        System.out.printf("       %s | %s%n", w.venue, w.type);
        System.out.printf("       %s%n", w.instructor);
        System.out.printf("        %s | %.1f (%d ratings)%n", w.category, w.rating, w.ratingCount);
        System.out.printf("       %d/%d seats (%.0f%% full)%s%n",
            w.takenSeats, w.totalSeats, w.fillPct(),
            w.lowSeats() ? "    LOW SEATS!" : (w.isFull() ? "   FULL" : "   OPEN"));
    }

    //
    // MAIN MENU
    //

    public static void main(String[] args) {
        seedData();
        System.out.println("\n Welcome to WorkShop Hub! Loading...");
        try { Thread.sleep(600); } catch (Exception e) {}

        while (true) {
            cls(); header(); line();
            System.out.println("   MAIN MENU");
            line();
            System.out.println(" 1.    Browse Workshops");
            System.out.println(" 2.    Search & Filter Workshops");
            System.out.println(" 3.    Public Analytics");
            System.out.println(" 4.    Find Your Interest (By Category)");
            System.out.println(" 5.    Notifications");
            System.out.println(" 6.    AI Workshop Recommender");
            System.out.println(" 7.    DSA Concepts Demo");
            System.out.println(" 8.    Contact Us");

            if (currentUser != null) {
                line();
                System.out.println(" 9.    My Dashboard");
                System.out.println(" 10.   Logout");
            } else {
                line();
                System.out.println(" 9.    Login / Sign Up");
            }

            if (isAdmin) {
                System.out.println(" 11.    Admin Dashboard");
            }

            line();
            int choice = inputInt(" Enter choice: ");
            navHistory.addLast("Main Menu");   // CO3 - Deque navigation history

            switch (choice) {
                case 1 -> browsePage();
                case 2 -> searchFilterPage();
                case 3 -> analyticsPage();
                case 4 -> interestsPage();
                case 5 -> notificationsPage();
                case 6 -> aiRecommenderPage();
                case 7 -> dsaPage();
                case 8 -> contactPage();
                case 9 -> { if (currentUser != null) dashboardPage(); else authPage(); }
                case 10 -> { if (currentUser != null) logout(); }
                case 11 -> { if (isAdmin) adminDashboard(); }
                case 0 -> { System.out.println("\n Thank you for using WorkShop Hub! Goodbye "); System.exit(0); }
                default -> System.out.println(" Invalid choice.");
            }
        }
    }

    //
    // FEATURE 1: BROWSE WORKSHOPS
    //

    static void browsePage() {
        cls(); banner(" ALL WORKSHOPS (" + workshops.size() + " available)");
        workshops.forEach(WorkshopPortal::workshopCard);
        line();
        System.out.println(" Enter Workshop ID to view details, or 0 to go back:");
        int id = inputInt("   ");
        if (id > 0) workshopDetailPage(id);
    }

    //
    // WORKSHOP DETAIL PAGE (with all sub-features)
    //

    static void workshopDetailPage(int id) {
        // CO4 HashMap O(1) lookup
        Workshop w = wsIndex.get(id);
        if (w == null) { System.out.println(" Workshop not found!"); press(); return; }

        while (true) {
            cls();
            banner(" WORKSHOP DETAIL");
            workshopCard(w);
            line();
            System.out.println("    " + w.description);
            line();

            // Feature 7: Live Seat Countdown
            if (w.lowSeats()) {
                System.out.println("      HURRY! Only " + w.seatsLeft() + " seats left Register Now!");
            }
            // Feature 13: Countdown Timer
            System.out.println("    Workshop starts: " + w.date + " at " + w.time);
            System.out.println("      Register before it fills up!");

            line();
            System.out.println(" OPTIONS:");
            System.out.println(" 1.   Register");
            System.out.println(" 2.   View Reviews & Ratings");
            System.out.println(" 3.   Q&A Section");
            System.out.println(" 4.   Add to Calendar");
            System.out.println(" 5.   Share Workshop");
            System.out.println(" 6.   View/Download Certificate");
            System.out.println(" 0. Back");
            line();

            int ch = inputInt("   ");
            switch (ch) {
                case 1 -> registerWorkshop(w);
                case 2 -> ratingsPage(w);
                case 3 -> qaPage(w);
                case 4 -> addToCalendar(w);
                case 5 -> shareWorkshop(w);
                case 6 -> certificatePage(w);
                case 0 -> { return; }
            }
        }
    }

    //
    // REGISTRATION
    //

    static void registerWorkshop(Workshop w) {
        if (currentUser == null) {
            System.out.println("\n   Please login to register.");
            press(); authPage(); return;
        }
        if (w.isFull()) { System.out.println("\n   Workshop is full! Join the waitlist."); press(); return; }
        if (currentUser.registeredWsIds.contains(w.id)) {
            System.out.println("\n   You are already registered for this workshop!"); press(); return;
        }

        System.out.println("\n Confirm registration for: " + w.title + "? (y/n)");
        if (!input("   ").equalsIgnoreCase("y")) return;

        currentUser.registeredWsIds.add(w.id);
        w.takenSeats++;
        addNotification(" Registered for: " + w.title + " on " + w.date, "success");

        // Feature 4: QR Code (simulated)
        System.out.println("\n ");
        System.out.println("     REGISTRATION SUCCESSFUL! ");
        System.out.println(" ");
        System.out.printf( "    Workshop: %-18s%n", w.title.length()>18?w.title.substring(0,18):w.title);
        System.out.printf( "    Date:     %-18s%n", w.date);
        System.out.printf( "    Time:     %-18s%n", w.time);
        System.out.printf( "    Venue:    %-18s%n", w.venue.length()>18?w.venue.substring(0,18):w.venue);
        System.out.printf( "    Student: %-18s%n", currentUser.name.length()>18?currentUser.name.substring(0,18):currentUser.name);
        System.out.printf( "    Roll No: %-18s%n", currentUser.rollNo);
        System.out.println(" ");
        System.out.println("     QR CODE (simulated):     ");
        System.out.println("             ");
        System.out.println("             ");
        System.out.println("             ");
        System.out.println("    KLU-WS-" + w.id + "-" + currentUser.rollNo + "         ");
        System.out.println(" ");

        // Feature 6: Badges
        checkAndAwardBadges();
        press();
    }

    // Feature 6: Achievement Badges
    static void checkAndAwardBadges() {
        int count = currentUser.registeredWsIds.size();
        List<Badge> earned = new ArrayList<>();
        Badge[] allBadges = {
            new Badge("First Step",     "", "Registered for your first workshop!"),
            new Badge("On Fire",        "", "Registered for 2 workshops!"),
            new Badge("Go-Getter",      "", "Registered for 3 workshops!"),
            new Badge("Workshop Pro",   "", "Registered for 5 workshops!"),
            new Badge("Digital Learner","", "Registered for an Online workshop!"),
            new Badge("Campus Hero",    "", "Registered for all 8 workshops!")
        };
        int[] thresholds = {1, 2, 3, 5, -1, 8};

        for (int i = 0; i < allBadges.length; i++) {
            Badge b = allBadges[i];
            boolean alreadyHas = currentUser.badges.stream().anyMatch(x -> x.name.equals(b.name));
            if (alreadyHas) continue;
            boolean earn = false;
            if (i == 4) {
                // Digital Learner: registered for any online workshop
                earn = currentUser.registeredWsIds.stream()
                    .anyMatch(id -> wsIndex.containsKey(id) && wsIndex.get(id).type.equals("Online"));
            } else if (thresholds[i] > 0 && count >= thresholds[i]) {
                earn = true;
            }
            if (earn) { currentUser.badges.add(b); earned.add(b); }
        }
        if (!earned.isEmpty()) {
            System.out.println("\n   BADGE(S) UNLOCKED!");
            earned.forEach(b -> System.out.println("     " + b.emoji + " " + b.name + " " + b.description));
        }
    }

    //
    // FEATURE 5: RATINGS & REVIEWS
    //

    static void ratingsPage(Workshop w) {
        cls(); banner(" RATINGS & REVIEWS " + w.title);
        System.out.printf(" Overall Rating: %.1f / 5.0   (%d reviews)%n", w.rating, w.ratingCount);

        // Star bar chart
        int[] starCounts = {0, 1, 3, 4, 7, 10}; // mock distribution
        for (int i = 5; i >= 1; i--) {
            String bar = "".repeat(starCounts[i] * 3);
            System.out.printf(" %d %-30s %d%n", i, bar, starCounts[i]);
        }
        line();

        if (w.reviews.isEmpty()) System.out.println(" No reviews yet. Be the first!");
        else w.reviews.forEach(r -> {
            System.out.printf(" %s %-15s%n", "".repeat(r.stars), r.studentName);
            System.out.println(" \"" + r.comment + "\"   " + r.date);
            line();
        });

        if (currentUser != null && currentUser.registeredWsIds.contains(w.id)) {
            System.out.println(" Write a review? (y/n)");
            if (input("   ").equalsIgnoreCase("y")) {
                int stars = inputInt(" Stars (1-5): ");
                if (stars < 1 || stars > 5) { System.out.println(" Invalid!"); press(); return; }
                String comment = input(" Comment: ");
                w.reviews.add(new Review(currentUser.name, stars, comment,
                    LocalDate.now().format(DateTimeFormatter.ofPattern("MMM dd, yyyy"))));
                // Update average
                w.rating = w.reviews.stream().mapToInt(r -> r.stars).average().orElse(w.rating);
                w.ratingCount++;
                System.out.println("   Review submitted! Thank you.");
            }
        } else System.out.println(" (Register for this workshop to leave a review)");
        press();
    }

    //
    // FEATURE 14: Q&A CHAT
    //

    static void qaPage(Workshop w) {
        while (true) {
            cls(); banner(" Q&A " + w.title);
            if (w.qaList.isEmpty()) System.out.println(" No questions yet. Ask the first one!");
            else w.qaList.forEach(qa -> {
                System.out.printf(" [Q%d] %s asks:%n", qa.id, qa.author);
                System.out.println(" \"" + qa.question + "\"   " + qa.likes + " likes");
                if (!qa.answers.isEmpty()) {
                    System.out.println(" Answers:");
                    qa.answers.forEach(a -> System.out.println("     " + a));
                }
                line();
            });
            System.out.println(" 1. Ask a question 2. Like a question 3. Answer 0. Back");
            int ch = inputInt("   ");
            if (ch == 1) {
                if (currentUser == null) { System.out.println(" Login required!"); press(); continue; }
                String q = input(" Your question: ");
                w.qaList.add(new QAPost(qaIdSeq++, currentUser.name, q));
                System.out.println("   Question posted!");
            } else if (ch == 2) {
                int qid = inputInt(" Question ID to like: ");
                w.qaList.stream().filter(q -> q.id == qid).findFirst().ifPresent(q -> { q.likes++; System.out.println("   Liked!"); });
            } else if (ch == 3) {
                int qid = inputInt(" Question ID to answer: ");
                String ans = input(" Your answer: ");
                w.qaList.stream().filter(q -> q.id == qid).findFirst()
                    .ifPresent(q -> { q.answers.add(ans + (currentUser!=null?" "+currentUser.name:" Guest")); System.out.println("   Answer posted!"); });
            } else return;
            press();
        }
    }

    //
    // FEATURE 2: ADD TO CALENDAR
    //

    static void addToCalendar(Workshop w) {
        cls(); banner(" ADD TO CALENDAR " + w.title);
        System.out.println(" Workshop: " + w.title);
        System.out.println(" Date:     " + w.date + " at " + w.time);
        System.out.println(" Venue:    " + w.venue);
        System.out.println(" Instructor: " + w.instructor);
        line();
        System.out.println(" 1.   Google Calendar link");
        System.out.println(" 2.   Download .ics file (Apple/Outlook)");
        System.out.println(" 0. Back");
        int ch = inputInt("   ");
        if (ch == 1) {
            System.out.println("\n   Google Calendar Link (copy and open in browser):");
            System.out.println(" https://calendar.google.com/calendar/render?action=TEMPLATE");
            System.out.println(" &text=" + w.title.replace(" ", "+"));
            System.out.println(" &details=" + w.description.replace(" ", "+").substring(0,30) + "...");
            System.out.println(" &location=" + w.venue.replace(" ", "+"));
        } else if (ch == 2) {
            System.out.println("\n   .ICS File Content (save as workshop_" + w.id + ".ics):");
            System.out.println(" BEGIN:VCALENDAR");
            System.out.println(" VERSION:2.0");
            System.out.println(" BEGIN:VEVENT");
            System.out.println(" SUMMARY:" + w.title);
            System.out.println(" DESCRIPTION:" + w.description.substring(0,50));
            System.out.println(" LOCATION:" + w.venue);
            System.out.println(" DTSTART:20250315T100000");
            System.out.println(" DTEND:20250315T130000");
            System.out.println(" ORGANIZER:mailto:" + ADMIN_EMAIL);
            System.out.println(" END:VEVENT");
            System.out.println(" END:VCALENDAR");
        }
        press();
    }

    //
    // FEATURE 12: SHARE WORKSHOP
    //

    static void shareWorkshop(Workshop w) {
        cls(); banner(" SHARE " + w.title);
        System.out.println(" 1.   WhatsApp");
        System.out.println(" 2.   Twitter / X");
        System.out.println(" 3.   Copy Link");
        int ch = inputInt("   ");
        String url = "https://kluniversity.in/workshops/" + w.id;
        if (ch == 1)
            System.out.println("\n WhatsApp: https://wa.me/?text=Join+me+at+" + w.title.replace(" ","+") + "+"+url);
        else if (ch == 2)
            System.out.println("\n Twitter: https://twitter.com/intent/tweet?text=Joining+" + w.title.replace(" ","+") + "&url="+url);
        else if (ch == 3)
            System.out.println("\n   Link copied: " + url);
        System.out.println("\n   Share link generated!");
        press();
    }

    //
    // FEATURE 10: CERTIFICATE
    //

    static void certificatePage(Workshop w) {
        if (currentUser == null || !currentUser.registeredWsIds.contains(w.id)) {
            System.out.println("\n   You must be registered for this workshop to get a certificate.");
            press(); return;
        }
        cls();
        System.out.println();
        System.out.println(" ");
        System.out.println("              CERTIFICATE OF PARTICIPATION               ");
        System.out.println(" ");
        System.out.println("                                                            ");
        System.out.println("                This is to certify that                     ");
        System.out.printf( "             %-44s %n", centerText(currentUser.name, 44));
        System.out.println("                                                            ");
        System.out.println("          has successfully participated in the              ");
        System.out.printf( "        %-50s%n", centerText(w.title, 50));
        System.out.println("                                                            ");
        System.out.printf( "      Conducted by: %-40s%n", w.instructor);
        System.out.printf( "      Date:         %-40s%n", w.date);
        System.out.printf( "      Roll No:      %-40s%n", currentUser.rollNo);
        System.out.println("                                                            ");
        System.out.println("      _____________________     _______________________     ");
        System.out.println("      Workshop Coordinator       KL University, Hyd         ");
        System.out.println("                                                            ");
        System.out.println(" ");
        System.out.println("\n   Certificate displayed! (In web version: Download PNG / Print)");
        press();
    }

    static String centerText(String s, int width) {
        if (s.length() >= width) return s.substring(0, width);
        int pad = (width - s.length()) / 2;
        return " ".repeat(pad) + s + " ".repeat(width - s.length() - pad);
    }

    //
    // FEATURE 11: SEARCH & FILTER (CO1 - Algorithms)
    //

    static void searchFilterPage() {
        cls(); banner(" SEARCH & FILTER WORKSHOPS");
        System.out.println(" 1. Search by keyword (title/instructor)");
        System.out.println(" 2. Filter by category");
        System.out.println(" 3. Filter by type (Online/Offline)");
        System.out.println(" 4. Filter by availability");
        System.out.println(" 5. Sort by seats available (Merge Sort O(n log n))");
        System.out.println(" 6. Sort A Z              (Quick Sort O(n log n))");
        System.out.println(" 7. Sort by popularity       (Merge Sort)");
        System.out.println(" 8. Binary Search by ID      (O(log n))");
        int ch = inputInt("   ");

        List<Workshop> result = new ArrayList<>(workshops);

        switch (ch) {
            case 1 -> {
                String kw = input(" Keyword: ").toLowerCase();
                // CO1 Linear Search O(n)
                result = linearSearchWorkshops(workshops, kw);
                System.out.println("   Linear Search used O(n)");
            }
            case 2 -> {
                System.out.println(" Categories: Tech | Data | Design | Soft");
                String cat = input(" Category: ");
                result = workshops.stream().filter(w -> w.category.equalsIgnoreCase(cat)).collect(Collectors.toList());
            }
            case 3 -> {
                String type = input(" Type (Online/Offline): ");
                result = workshops.stream().filter(w -> w.type.equalsIgnoreCase(type)).collect(Collectors.toList());
            }
            case 4 -> {
                result = workshops.stream().filter(w -> !w.isFull()).collect(Collectors.toList());
            }
            case 5 -> {
                result = mergeSort(new ArrayList<>(workshops), Comparator.comparingInt(Workshop::seatsLeft).reversed());
                System.out.println(" Sorted by seats available Merge Sort O(n log n)");
            }
            case 6 -> {
                result = quickSort(new ArrayList<>(workshops), Comparator.comparing(w -> w.title));
                System.out.println(" Sorted A Z Quick Sort O(n log n)");
            }
            case 7 -> {
                result = mergeSort(new ArrayList<>(workshops), Comparator.comparingDouble(Workshop::fillPct).reversed());
                System.out.println(" Sorted by popularity Merge Sort O(n log n)");
            }
            case 8 -> {
                int targetId = inputInt(" Workshop ID to search (1-8): ");
                // CO1 Binary Search O(log n)
                List<Workshop> sorted = workshops.stream().sorted(Comparator.comparingInt(w -> w.id)).collect(Collectors.toList());
                int idx = binarySearchWorkshop(sorted, targetId);
                if (idx >= 0) { result = List.of(sorted.get(idx)); System.out.println("   Binary Search found in O(log n)!"); }
                else { System.out.println("   Not found!"); result = new ArrayList<>(); }
            }
        }

        if (result.isEmpty()) { System.out.println(" No workshops found."); press(); return; }
        System.out.println("\n Results (" + result.size() + " workshop(s)):");
        result.forEach(WorkshopPortal::workshopCard);
        line();
        int id = inputInt(" Enter ID to view details, or 0 to go back: ");
        if (id > 0) workshopDetailPage(id);
    }

    // CO1: Linear Search O(n)
    static List<Workshop> linearSearchWorkshops(List<Workshop> list, String kw) {
        List<Workshop> res = new ArrayList<>();
        for (Workshop w : list) {
            if (w.title.toLowerCase().contains(kw) || w.instructor.toLowerCase().contains(kw)
                || w.category.toLowerCase().contains(kw)) res.add(w);
        }
        return res;
    }

    // CO1: Binary Search O(log n)
    static int binarySearchWorkshop(List<Workshop> sorted, int targetId) {
        int lo = 0, hi = sorted.size() - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            System.out.println(" Step: checking ID=" + sorted.get(mid).id);
            if      (sorted.get(mid).id == targetId) return mid;
            else if (sorted.get(mid).id < targetId) lo = mid + 1;
            else                                       hi = mid - 1;
        }
        return -1;
    }

    // CO1: Merge Sort O(n log n)
    static List<Workshop> mergeSort(List<Workshop> arr, Comparator<Workshop> cmp) {
        if (arr.size() <= 1) return arr;
        int mid = arr.size() / 2;
        List<Workshop> L = mergeSort(new ArrayList<>(arr.subList(0, mid)), cmp);
        List<Workshop> R = mergeSort(new ArrayList<>(arr.subList(mid, arr.size())), cmp);
        return mergeLists(L, R, cmp);
    }
    static List<Workshop> mergeLists(List<Workshop> L, List<Workshop> R, Comparator<Workshop> cmp) {
        List<Workshop> res = new ArrayList<>();
        int i = 0, j = 0;
        while (i < L.size() && j < R.size()) {
            if (cmp.compare(L.get(i), R.get(j)) <= 0) res.add(L.get(i++));
            else res.add(R.get(j++));
        }
        while (i < L.size()) res.add(L.get(i++));
        while (j < R.size()) res.add(R.get(j++));
        return res;
    }

    // CO1: Quick Sort O(n log n) avg
    static List<Workshop> quickSort(List<Workshop> arr, Comparator<Workshop> cmp) {
        if (arr.size() <= 1) return arr;
        Workshop pivot = arr.get(arr.size() / 2);
        List<Workshop> left = arr.stream().filter(w -> cmp.compare(w,pivot) < 0).collect(Collectors.toList());
        List<Workshop> mid   = arr.stream().filter(w -> cmp.compare(w,pivot) == 0).collect(Collectors.toList());
        List<Workshop> right = arr.stream().filter(w -> cmp.compare(w,pivot) > 0).collect(Collectors.toList());
        List<Workshop> res = new ArrayList<>();
        res.addAll(quickSort(left,cmp)); res.addAll(mid); res.addAll(quickSort(right,cmp));
        return res;
    }

    //
    // FEATURE 8 + 4TH NAV: INTERESTS / CATEGORIES
    //

    static void interestsPage() {
        cls(); banner(" FIND YOUR INTEREST");
        // CO4 TreeMap for sorted category grouping
        Map<String, List<Workshop>> cats = new TreeMap<>();
        workshops.forEach(w -> cats.computeIfAbsent(w.category, k -> new ArrayList<>()).add(w));

        String[] emojis = {"", "", "", ""};
        int i = 0;
        for (Map.Entry<String, List<Workshop>> e : cats.entrySet()) {
            System.out.printf(" %d. %s %-8s (%d workshop(s))%n",
                ++i, emojis[i % emojis.length], e.getKey(), e.getValue().size());
        }
        line();
        String cat = input(" Enter category name to browse: ");
        List<Workshop> filtered = workshops.stream()
            .filter(w -> w.category.equalsIgnoreCase(cat)).collect(Collectors.toList());
        if (filtered.isEmpty()) { System.out.println(" No workshops in this category."); press(); return; }
        filtered.forEach(WorkshopPortal::workshopCard);
        int id = inputInt(" Enter ID to view details, or 0 to go back: ");
        if (id > 0) workshopDetailPage(id);
    }

    //
    // FEATURE 9: NOTIFICATIONS (CO3 Queue FIFO)
    //

    static void notificationsPage() {
        cls(); banner(" NOTIFICATIONS (" + notifQueue.size() + " unread)");

        if (notifQueue.isEmpty()) { System.out.println(" No notifications."); press(); return; }

        // Display all (peek without removing)
        int i = 1;
        for (Notification n : notifQueue) {
            System.out.printf(" [%d] %s%n       Type: %s%n", i++, n.message, n.type);
            line();
        }
        System.out.println(" 1. Read next (Dequeue FIFO)");
        System.out.println(" 2. Mark all as read");
        System.out.println(" 0. Back");
        int ch = inputInt("   ");
        if (ch == 1) {
            Notification n = notifQueue.poll(); // CO3 Queue FIFO dequeue
            if (n != null) System.out.println("\n   Reading: " + n.message);
        } else if (ch == 2) {
            notifQueue.clear();
            System.out.println("   All notifications marked as read.");
        }
        press();
    }

    //
    // FEATURE 6: AI RECOMMENDER
    //

    static void aiRecommenderPage() {
        cls(); banner(" AI WORKSHOP RECOMMENDER (Powered by Claude AI)");
        System.out.println(" Hi! I'm your AI advisor. Tell me your interests");
        System.out.println(" and I'll recommend the perfect workshops for you!\n");

        String interest = input(" You: ").toLowerCase();
        System.out.println("\n   AI Advisor:");

        List<Workshop> recs = new ArrayList<>();
        if (interest.contains("machine learning") || interest.contains("ml") || interest.contains("ai"))
            recs.add(wsIndex.get(1));
        if (interest.contains("security") || interest.contains("hack") || interest.contains("cyber"))
            recs.add(wsIndex.get(2));
        if (interest.contains("communi") || interest.contains("speak") || interest.contains("present"))
            { recs.add(wsIndex.get(3)); recs.add(wsIndex.get(8)); }
        if (interest.contains("data") || interest.contains("python") || interest.contains("analytics"))
            recs.add(wsIndex.get(4));
        if (interest.contains("web") || interest.contains("html") || interest.contains("react"))
            recs.add(wsIndex.get(5));
        if (interest.contains("design") || interest.contains("ui") || interest.contains("ux") || interest.contains("figma"))
            recs.add(wsIndex.get(6));
        if (interest.contains("cloud") || interest.contains("aws") || interest.contains("server"))
            recs.add(wsIndex.get(7));
        if (interest.contains("speak") || interest.contains("public") || interest.contains("stage"))
            recs.add(wsIndex.get(8));

        if (recs.isEmpty()) {
            // Default recommendations based on popularity
            recs.add(wsIndex.get(1));
            recs.add(wsIndex.get(4));
            recs.add(wsIndex.get(5));
        }

        System.out.println(" Based on your interest in \"" + interest + "\", I recommend:\n");
        recs.stream().distinct().limit(3).forEach(w -> {
            System.out.println("   " + w.title);
            System.out.println("      " + w.date + " |   " + w.instructor);
            System.out.println("      " + w.seatsLeft() + " seats left |   " + w.rating);
            System.out.println("      \"" + w.description.substring(0,60) + "...\"");
            line();
        });

        int id = inputInt(" Enter Workshop ID to register, or 0 to skip: ");
        if (id > 0) workshopDetailPage(id);
    }

    //
    // FEATURE 8 (ANALYTICS PAGE)
    //

    static void analyticsPage() {
        cls(); banner(" LIVE WORKSHOP ANALYTICS");
        int totalReg = workshops.stream().mapToInt(w -> w.takenSeats).sum();
        int totalCap = workshops.stream().mapToInt(w -> w.totalSeats).sum();
        double avgFill = workshops.stream().mapToDouble(Workshop::fillPct).average().orElse(0);

        System.out.printf("   Total Registrations : %d%n", totalReg);
        System.out.printf("    Active Workshops    : %d%n", workshops.size());
        System.out.printf("   Total Capacity       : %d%n", totalCap);
        System.out.printf("   Avg Seat Fill Rate   : %.1f%%%n", avgFill);
        System.out.printf("   Avg Rating           : 4.6 / 5.0%n");
        line();

        // Bar chart of registrations per workshop
        System.out.println("   REGISTRATION BAR CHART:");
        workshops.forEach(w -> {
            int bars = (int)(w.fillPct() / 5);
            String bar = "".repeat(bars);
            System.out.printf(" %-35s |%-20s| %d/%d (%.0f%%)%n",
                w.title.length()>35?w.title.substring(0,35):w.title,
                bar, w.takenSeats, w.totalSeats, w.fillPct());
        });
        line();

        // Most Popular (Merge Sort by fill rate)
        List<Workshop> byPop = mergeSort(new ArrayList<>(workshops),
            Comparator.comparingDouble(Workshop::fillPct).reversed());
        System.out.println("   MOST POPULAR:");
        byPop.stream().limit(3).forEach(w ->
            System.out.printf("     %d. %-35s %.0f%% full%n",
                byPop.indexOf(w)+1, w.title, w.fillPct()));
        line();

        // Trending (least seats = most urgent)
        List<Workshop> trending = workshops.stream()
            .filter(w -> !w.isFull())
            .sorted(Comparator.comparingInt(Workshop::seatsLeft))
            .limit(3).collect(Collectors.toList());
        System.out.println("   TRENDING (Filling Up Fast):");
        trending.forEach(w ->
            System.out.printf("      %-35s %d seats left!%n", w.title, w.seatsLeft()));
        line();

        // Full stats table
        System.out.println("   FULL STATS TABLE:");
        System.out.printf(" %-4s %-35s %-8s %-6s %-8s %-6s%n",
            "ID","Title","Category","Reg","Cap","Fill%");
        line();
        workshops.forEach(w ->
            System.out.printf(" %-4d %-35s %-8s %-6d %-8d %.0f%%%n",
                w.id, w.title.length()>35?w.title.substring(0,35):w.title,
                w.category, w.takenSeats, w.totalSeats, w.fillPct()));
        press();
    }

    //
    // FEATURE 3: STUDENT DASHBOARD
    //

    static void dashboardPage() {
        cls(); banner(" STUDENT DASHBOARD " + currentUser.name);

        // 4 stat cards
        System.out.println("        ");
        System.out.printf( "   Registered      Completed       Badges          Reviews      %n");
        System.out.printf( "       %-8d       %-8d       %-8d       %-8d%n",
            currentUser.registeredWsIds.size(), 0, currentUser.badges.size(),
            workshops.stream().mapToInt(w->w.reviews.size()).sum());
        System.out.println("        ");
        line();

        // Registered workshops
        System.out.println("   MY REGISTERED WORKSHOPS:");
        if (currentUser.registeredWsIds.isEmpty()) System.out.println(" None yet browse and register!");
        else currentUser.registeredWsIds.forEach(id -> {
            Workshop w = wsIndex.get(id);
            if (w != null) System.out.printf("   [%d] %-35s %s%n", w.id, w.title, w.date);
        });
        line();

        // Badges
        System.out.println("   MY BADGES:");
        if (currentUser.badges.isEmpty()) System.out.println(" No badges yet register for workshops to earn badges!");
        else currentUser.badges.forEach(b -> System.out.println(" " + b.emoji + " " + b.name + " " + b.description));
        line();

        // All available badges
        System.out.println("   ALL BADGES (unlock by registering):");
        String[][] allB = {{"","First Step","1 workshop"},{"","On Fire","2 workshops"},
            {"","Go-Getter","3 workshops"},{"","Workshop Pro","5 workshops"},
            {"","Digital Learner","Any online"},{"","Campus Hero","All 8"}};
        for (String[] b : allB) {
            boolean has = currentUser.badges.stream().anyMatch(x -> x.name.equals(b[1]));
            System.out.printf(" %s %-16s %-15s %s%n", b[0], b[1], "("+b[2]+")", has?" Earned":" Locked");
        }
        press();
    }

    //
    // AUTH SYSTEM (Login / Sign Up / Admin)
    //

    static void authPage() {
        cls(); banner(" LOGIN / SIGN UP");
        System.out.println(" 1. Student Login");
        System.out.println(" 2. Student Sign Up");
        System.out.println(" 3. Admin Login");
        System.out.println(" 0. Back");
        int ch = inputInt("   ");
        if      (ch == 1) studentLogin();
        else if (ch == 2) studentSignup();
        else if (ch == 3) adminLogin();
    }

    static void studentLogin() {
        cls(); banner(" STUDENT LOGIN");
        String email = input(" Email: ");
        String pass = input(" Password: ");

        Optional<Student> found = students.stream()
            .filter(s -> s.email.equalsIgnoreCase(email) && s.password.equals(pass))
            .findFirst();

        if (found.isPresent()) {
            currentUser = found.get(); isAdmin = false;
            currentUser.loginCount++;
            System.out.println("\n   Welcome back, " + currentUser.name + "!");
            addNotification(" Welcome back, " + currentUser.name + "!", "info");
        } else System.out.println("\n   Invalid email or password.");
        press();
    }

    static void studentSignup() {
        cls(); banner(" STUDENT SIGN UP");
        String name = input(" Full Name: ");
        String email = input(" Email: ");
        String rollNo = input(" Roll Number (e.g. 2024CS001): ");
        String pass = input(" Password: ");
        String confirm = input(" Confirm Password: ");

        if (!pass.equals(confirm)) { System.out.println("   Passwords do not match!"); press(); return; }
        if (students.stream().anyMatch(s -> s.email.equalsIgnoreCase(email))) {
            System.out.println("   Email already registered!"); press(); return;
        }
        if (!rollNo.matches("\\d{4}[A-Z]{2}\\d{3}")) {
            System.out.println("   Invalid roll number format! Use: 2024CS001"); press(); return;
        }

        Student s = new Student(name, email, rollNo, pass);
        students.add(s);
        // Add to hash table (CO4)
        currentUser = s; isAdmin = false;
        System.out.println("\n   Account created! Welcome, " + name + "!");
        addNotification(" Welcome to WorkShop Hub, " + name + "!", "info");
        press();
    }

    static void adminLogin() {
        cls(); banner(" ADMIN LOGIN");
        String email = input(" Admin Email: ");
        String pass = input(" Password: ");
        if (email.equals(ADMIN_EMAIL) && pass.equals(ADMIN_PASS)) {
            isAdmin = true; currentUser = null;
            System.out.println("\n   Welcome, Dr. Mohanapriya! Admin access granted.");
        } else System.out.println("\n   Invalid admin credentials.");
        press();
    }

    static void logout() {
        System.out.println("\n   Goodbye, " + (currentUser != null ? currentUser.name : "Admin") + "!");
        currentUser = null; isAdmin = false; press();
    }

    //
    // ADMIN DASHBOARD
    //

    static void adminDashboard() {
        while (true) {
            cls(); banner(" ADMIN DASHBOARD Dr. Mohanapriya");
            System.out.println("   " + LocalDateTime.now().format(DateTimeFormatter.ofPattern("EEE, dd MMM yyyy HH:mm:ss")));
            line();
            System.out.println(" 1.    Dashboard Overview");
            System.out.println(" 2.     Manage Workshops");
            System.out.println(" 3.    Registrations");
            System.out.println(" 4.    Admin Analytics");
            System.out.println(" 5.    Send Notification");
            System.out.println(" 6.    Student Directory");
            System.out.println(" 7.    Seat Monitor");
            System.out.println(" 8.    Reports");
            System.out.println(" 0.    Back to Main Menu");
            line();
            int ch = inputInt("   ");
            switch (ch) {
                case 1 -> adminOverview();
                case 2 -> adminWorkshops();
                case 3 -> adminRegistrations();
                case 4 -> analyticsPage();
                case 5 -> adminSendNotif();
                case 6 -> adminStudents();
                case 7 -> adminSeatMonitor();
                case 8 -> adminReports();
                case 0 -> { return; }
            }
        }
    }

    static void adminOverview() {
        cls(); banner(" ADMIN OVERVIEW");
        int totalReg = workshops.stream().mapToInt(w -> w.takenSeats).sum();
        System.out.println("   Total Workshops   : " + workshops.size());
        System.out.println("   Total Students    : " + students.size());
        System.out.println("   Total Registrations: " + totalReg);
        System.out.println("   Pending Notifs    : " + notifQueue.size());
        line();
        System.out.println("   CRITICAL (< 5 seats):");
        workshops.stream().filter(w -> w.seatsLeft() < 5 && !w.isFull())
            .forEach(w -> System.out.println("       " + w.title + " " + w.seatsLeft() + " seats left"));
        line();
        System.out.println("   RECENT ACTIVITY:");
        System.out.println("      Priya Sharma registered for Machine Learning");
        System.out.println("      Rohit Kumar registered for Cybersecurity");
        System.out.println("      New review added to Data Science workshop");
        press();
    }

    static void adminWorkshops() {
        cls(); banner(" MANAGE WORKSHOPS");
        workshops.forEach(w -> System.out.printf(" [%d] %-35s %d/%d seats %s%n",
            w.id, w.title, w.takenSeats, w.totalSeats, w.isFull()?"FULL":"OPEN"));
        line();
        System.out.println(" 1. View workshop details");
        System.out.println(" 2. Update seat capacity");
        System.out.println(" 3. Add new workshop");
        System.out.println(" 0. Back");
        int ch = inputInt("   ");
        if (ch == 1) {
            int id = inputInt(" Workshop ID: ");
            Workshop w = wsIndex.get(id);
            if (w != null) workshopCard(w);
            else System.out.println(" Not found.");
        } else if (ch == 2) {
            int id = inputInt(" Workshop ID: ");
            Workshop w = wsIndex.get(id);
            if (w != null) {
                int newCap = inputInt(" New capacity: ");
                w.totalSeats = newCap;
                System.out.println("   Updated! New capacity: " + newCap);
            }
        } else if (ch == 3) {
            System.out.println(" (In full version: form to add new workshop with all fields)");
        }
        press();
    }

    static void adminRegistrations() {
        cls(); banner(" REGISTRATIONS");
        System.out.printf(" %-4s %-20s %-12s %-30s %-12s%n",
            "ID","Student","Roll No","Workshop","Status");
        line();
        int i = 1;
        for (Student s : students) {
            for (int wsId : s.registeredWsIds) {
                Workshop w = wsIndex.get(wsId);
                if (w != null)
                    System.out.printf(" %-4d %-20s %-12s %-30s %-12s%n",
                        i++, s.name, s.rollNo,
                        w.title.length()>30?w.title.substring(0,30):w.title, "Confirmed");
            }
        }
        press();
    }

    static void adminSendNotif() {
        cls(); banner(" SEND NOTIFICATION");
        String msg = input(" Notification message: ");
        System.out.println(" Type: 1.Info 2.Alert 3.Reminder");
        int t = inputInt("   ");
        String type = t==2?"alert":t==3?"reminder":"info";
        addNotification(" [Admin] " + msg, type);
        System.out.println("   Notification sent to all students!");
        press();
    }

    static void adminStudents() {
        cls(); banner(" STUDENT DIRECTORY");
        System.out.println(" Filter: 1.All 2.By workshop 3.Search by name");
        int ch = inputInt("   "); cls();
        List<Student> result = new ArrayList<>(students);
        if (ch == 2) {
            int wsId = inputInt(" Workshop ID: ");
            result = students.stream().filter(s -> s.registeredWsIds.contains(wsId)).collect(Collectors.toList());
        } else if (ch == 3) {
            String kw = input(" Name keyword: ").toLowerCase();
            result = students.stream().filter(s -> s.name.toLowerCase().contains(kw)).collect(Collectors.toList());
        }
        System.out.printf(" %-4s %-20s %-12s %-30s %-8s%n","#","Name","Roll No","Email","Workshops");
        line();
        int i = 1;
        for (Student s : result)
            System.out.printf(" %-4d %-20s %-12s %-30s %-8d%n",
                i++, s.name, s.rollNo, s.email, s.registeredWsIds.size());
        press();
    }

    static void adminSeatMonitor() {
        cls(); banner(" SEAT MONITOR");
        long critical = workshops.stream().filter(w -> w.seatsLeft() < 5 && !w.isFull()).count();
        long warning = workshops.stream().filter(w -> w.seatsLeft() >= 5 && w.seatsLeft() < 15).count();
        long healthy = workshops.stream().filter(w -> w.seatsLeft() >= 15 && !w.isFull()).count();
        long full     = workshops.stream().filter(Workshop::isFull).count();

        System.out.printf("   Critical (< 5 seats) : %d workshop(s)%n", critical);
        System.out.printf("   Warning (< 15 seats) : %d workshop(s)%n", warning);
        System.out.printf("   Healthy               : %d workshop(s)%n", healthy);
        System.out.printf("   Full                  : %d workshop(s)%n", full);
        line();
        workshops.forEach(w -> {
            String status = w.isFull() ? " FULL" : w.seatsLeft() < 5 ? " CRITICAL"
                            : w.seatsLeft() < 15 ? " WARNING" : " HEALTHY";
            System.out.printf(" %-35s %s (%d seats left)%n",
                w.title.length()>35?w.title.substring(0,35):w.title, status, w.seatsLeft());
        });
        press();
    }

    static void adminReports() {
        cls(); banner(" REPORTS");
        System.out.println(" 1. Export registrations (CSV preview)");
        System.out.println(" 2. Workshop summary report");
        System.out.println(" 0. Back");
        int ch = inputInt("   ");
        if (ch == 1) {
            System.out.println("\n CSV PREVIEW (workshop_registrations.csv):");
            System.out.println(" Student Name, Roll No, Email, Workshop, Date, Status");
            for (Student s : students)
                for (int wsId : s.registeredWsIds) {
                    Workshop w = wsIndex.get(wsId);
                    if (w != null) System.out.printf(" %s,%s,%s,%s,%s,Confirmed%n",
                        s.name, s.rollNo, s.email, w.title, w.date);
                }
        } else if (ch == 2) {
            System.out.println("\n WORKSHOP SUMMARY:");
            workshops.forEach(w -> System.out.printf(
                " %-35s | Reg: %-3d | Fill: %.0f%% | Rating: %.1f%n",
                w.title.length()>35?w.title.substring(0,35):w.title,
                w.takenSeats, w.fillPct(), w.rating));
        }
        press();
    }

    //
    // CONTACT PAGE
    //

    static void contactPage() {
        cls(); banner(" CONTACT US");
        System.out.println(" We're here to help with any questions!\n");
        System.out.println("    Email    : mohanapriya@klh.edu.in");
        System.out.println("    Phone    : +91 98858 92444");
        System.out.println("    Hours    : MonFri 9 AM 5 PM");
        System.out.println("    Address : KL University, Hyderabad");
        System.out.println("               Bowrampet 500 043");
        System.out.println("    Website : www.kluniversity.in/hyderabad");
        line();
        System.out.println(" Send a message? (y/n)");
        if (input("   ").equalsIgnoreCase("y")) {
            String msg = input(" Your message: ");
            System.out.println("\n   Message sent to mohanapriya@klh.edu.in!");
            System.out.println(" We'll respond within 24 hours.");
        }
        press();
    }

    //
    // FEATURE 7 (NAV): DSA CONCEPTS PAGE
    //

    static void dsaPage() {
        while (true) {
            cls(); banner(" DSA CONCEPTS LIVE DEMOS");
            System.out.println(" CO1    1. Sorting Algorithms Visualiser");
            System.out.println(" CO1    2. Binary vs Linear Search");
            System.out.println(" CO2    3. Linked Lists (Singly/Doubly/Circular)");
            System.out.println(" CO3    4. Stack / Queue / Circular Queue / Deque");
            System.out.println(" CO3    5. Min-Heap Priority Queue (Waitlist)");
            System.out.println(" CO4    6. Hash Table (Chaining)");
            System.out.println(" CO4    7. Hash Table (Open Addressing)");
            System.out.println(" CO4    8. Java Collections Summary");
            System.out.println("         0. Back");
            line();
            int ch = inputInt("   ");
            switch (ch) {
                case 1 -> dsaSortingDemo();
                case 2 -> dsaSearchDemo();
                case 3 -> dsaLinkedListDemo();
                case 4 -> dsaStackQueueDemo();
                case 5 -> dsaHeapDemo();
                case 6 -> dsaHashChainingDemo();
                case 7 -> dsaOpenAddrDemo();
                case 8 -> dsaCollectionsSummary();
                case 0 -> { return; }
            }
        }
    }

    // CO1: Sorting
    static void dsaSortingDemo() {
        cls(); banner("CO1 SORTING ALGORITHMS");
        int[] arr = {72, 38, 91, 14, 56, 43, 88, 27, 65, 19};
        System.out.println(" Initial array: " + Arrays.toString(arr));
        System.out.println(" 1.Bubble 2.Selection 3.Insertion 4.Merge 5.Quick");
        int ch = inputInt(" Choose algorithm: ");

        int[] a = arr.clone();
        switch (ch) {
            case 1 -> bubbleSortDemo(a);
            case 2 -> selectionSortDemo(a);
            case 3 -> insertionSortDemo(a);
            case 4 -> { System.out.println(" Merge Sort T(n) = 2T(n/2) + O(n) O(n log n)");
                        mergeSortDemo(a, 0, a.length-1);
                        System.out.println(" Sorted: " + Arrays.toString(a)); }
            case 5 -> { System.out.println(" Quick Sort T(n) = 2T(n/2) + O(n) avg O(n log n)");
                        quickSortDemo(a, 0, a.length-1);
                        System.out.println(" Sorted: " + Arrays.toString(a)); }
        }
        System.out.println("\n Complexity: Bubble/Selection/Insertion O(n) | Merge/Quick O(n log n)");
        press();
    }

    static void bubbleSortDemo(int[] a) {
        System.out.println(" [Bubble Sort] O(n):");
        int n=a.length, swaps=0;
        for (int i=0;i<n-1;i++) {
            boolean sw=false;
            for (int j=0;j<n-i-1;j++) { if(a[j]>a[j+1]){int t=a[j];a[j]=a[j+1];a[j+1]=t;swaps++;sw=true;} }
            System.out.println(" Pass " + (i+1) + ": " + Arrays.toString(a));
            if (!sw) { System.out.println(" Early exit!"); break; }
        }
        System.out.println(" Swaps: " + swaps);
    }
    static void selectionSortDemo(int[] a) {
        System.out.println(" [Selection Sort] O(n):");
        for (int i=0;i<a.length-1;i++) {
            int m=i; for (int j=i+1;j<a.length;j++) if(a[j]<a[m]) m=j;
            if(m!=i){int t=a[i];a[i]=a[m];a[m]=t;}
            System.out.println(" Pass "+(i+1)+": "+Arrays.toString(a));
        }
    }
    static void insertionSortDemo(int[] a) {
        System.out.println(" [Insertion Sort] O(n) worst, O(n) best:");
        for (int i=1;i<a.length;i++) {
            int k=a[i],j=i-1;
            while(j>=0&&a[j]>k){a[j+1]=a[j];j--;}
            a[j+1]=k;
            System.out.println(" Inserted "+k+": "+Arrays.toString(a));
        }
    }
    static void mergeSortDemo(int[] a, int l, int r) {
        if(l>=r) return;
        int m=(l+r)/2;
        mergeSortDemo(a,l,m); mergeSortDemo(a,m+1,r);
        int[] L=Arrays.copyOfRange(a,l,m+1), R=Arrays.copyOfRange(a,m+1,r+1);
        int i=0,j=0,k=l;
        while(i<L.length&&j<R.length) a[k++]=(L[i]<=R[j])?L[i++]:R[j++];
        while(i<L.length) a[k++]=L[i++]; while(j<R.length) a[k++]=R[j++];
        System.out.println(" Merged ["+l+".."+r+"]: "+subArrStr(a,l,r));
    }
    static void quickSortDemo(int[] a, int lo, int hi) {
        if(lo>=hi) return;
        int pivot=a[hi],i=lo-1;
        for(int j=lo;j<hi;j++) if(a[j]<=pivot){i++;int t=a[i];a[i]=a[j];a[j]=t;}
        int t=a[i+1];a[i+1]=a[hi];a[hi]=t; int p=i+1;
        System.out.println(" Pivot="+pivot+" at ["+p+"]: "+Arrays.toString(a));
        quickSortDemo(a,lo,p-1); quickSortDemo(a,p+1,hi);
    }
    static String subArrStr(int[] a, int l, int r) {
        StringBuilder sb=new StringBuilder("[");
        for(int i=l;i<=r;i++) sb.append(a[i]).append(i<r?",":""); return sb.append("]").toString();
    }

    // CO1: Search
    static void dsaSearchDemo() {
        cls(); banner("CO1 BINARY vs LINEAR SEARCH");
        int[] ids = {1,2,3,4,5,6,7,8};
        int target = inputInt(" Enter Workshop ID to search (1-8): ");

        System.out.println("\n --- LINEAR SEARCH --- O(n)");
        int lSteps=0; boolean lFound=false;
        for (int i=0;i<ids.length;i++) {
            lSteps++; System.out.println(" Check ["+i+"] = "+ids[i]);
            if(ids[i]==target){System.out.println("   FOUND at index "+i+" in "+lSteps+" steps!");lFound=true;break;}
        }
        if(!lFound) System.out.println("   Not found in "+lSteps+" steps.");

        System.out.println("\n --- BINARY SEARCH --- O(log n)");
        int lo=0,hi=ids.length-1,bSteps=0; boolean bFound=false;
        while(lo<=hi) {
            int mid=(lo+hi)/2; bSteps++;
            System.out.println(" Step "+bSteps+": lo="+lo+" hi="+hi+" mid="+mid+" val="+ids[mid]);
            if(ids[mid]==target){System.out.println("   FOUND at index "+mid+" in "+bSteps+" steps!");bFound=true;break;}
            else if(ids[mid]<target) lo=mid+1; else hi=mid-1;
        }
        if(!bFound) System.out.println("   Not found in "+bSteps+" steps.");

        System.out.println("\n Verdict: Linear used "+lSteps+" steps vs Binary "+bSteps+" steps.");
        System.out.println(" For n=8: log(8)=3 max steps for binary vs 8 for linear.");
        press();
    }

    // CO2: Linked Lists
    static void dsaLinkedListDemo() {
        cls(); banner("CO2 LINKED LISTS");
        System.out.println(" 1. Singly LL 2. Doubly LL 3. Circular LL");
        int type = inputInt("   ");

        // Reuse CO2 classes inline demo
        System.out.println("\n Building list with workshop names...");
        String[] vals = {"ML Workshop","Cybersecurity","Data Science","Web Dev"};

        if (type == 1) {
            System.out.println(" [Singly Linked List]");
            java.util.LinkedList<String> sll = new java.util.LinkedList<>();
            for (String v : vals) { sll.addFirst(v); System.out.println(" INSERT HEAD: " + v + " O(1)"); }
            System.out.println(" Traverse: " + sll + " NULL");
            String del = "Data Science";
            sll.remove(del); System.out.println(" DELETE \""+del+"\" O(n)");
            Collections.reverse(sll); System.out.println(" REVERSE O(n): " + sll);
        } else if (type == 2) {
            System.out.println(" [Doubly Linked List] prev & next pointers");
            java.util.LinkedList<String> dll = new java.util.LinkedList<>();
            for (String v : vals) { dll.addLast(v); System.out.println(" INSERT TAIL: "+v+" O(1)"); }
            System.out.println(" Forward: " + dll);
            java.util.List<String> rev = new java.util.LinkedList<>(dll);
            Collections.reverse(rev);
            System.out.println(" Backward: " + rev);
            dll.remove("Cybersecurity"); System.out.println(" DELETE any node O(1) with pointer: " + dll);
        } else {
            System.out.println(" [Circular Linked List] last.next head");
            java.util.LinkedList<String> cll = new java.util.LinkedList<>(Arrays.asList(vals));
            System.out.println(" Nodes: " + cll);
            System.out.println(" Rotating 6 times:");
            java.util.Iterator<String> it = cll.iterator();
            for (int i=0;i<6;i++) { if(!it.hasNext()){it=cll.iterator();} System.out.print("["+it.next()+"] "); }
            System.out.println("...(wraps)");
            System.out.println(" Floyd's Cycle Detection: Circular LL cycle DETECTED   O(n) O(1) space");
        }
        press();
    }

    // CO3: Stack/Queue
    static void dsaStackQueueDemo() {
        cls(); banner("CO3 STACK / QUEUE / CIRCULAR QUEUE / DEQUE");
        System.out.println(" [STACK Navigation History LIFO]");
        Deque<String> stack = new ArrayDeque<>();
        String[] pages = {"Home","Workshops","Detail:ML","Analytics","Detail:AWS"};
        for (String p : pages) { stack.push(p); System.out.println(" PUSH \""+p+"\" O(1)"); }
        System.out.println(" Stack: " + stack);
        System.out.println(" POP \"" + stack.pop() + "\" O(1)");
        System.out.println(" PEEK \"" + stack.peek() + "\" O(1)");
        line();

        System.out.println(" [QUEUE Notifications FIFO]");
        Queue<String> q = new LinkedList<>();
        String[] notifs = {"Seat Alert!","New Workshop!","Reminder","Badge!"};
        for (String n : notifs) { q.offer(n); System.out.println(" ENQUEUE \""+n+"\" O(1)"); }
        System.out.println(" Queue: " + q);
        System.out.println(" DEQUEUE \"" + q.poll() + "\" O(1)");
        System.out.println(" FRONT    \"" + q.peek() + "\" O(1)");
        line();

        System.out.println(" [CIRCULAR QUEUE Seat Slot Buffer]");
        int[] circQ = new int[5]; int front=0,rear=0,size=0,cap=5;
        for (int s=1;s<=5;s++){circQ[rear]=s;rear=(rear+1)%cap;size++;System.out.println(" Seat #"+s+" assigned rear="+rear);}
        System.out.println(" Release slots 1,2 Students cancel");
        front=(front+2)%cap; size-=2;
        circQ[rear]=6; rear=(rear+1)%cap; size++;
        System.out.println(" Seat #6 recycled into freed slot (no shifting!) O(1)");
        line();

        System.out.println(" [DEQUE Undo/Redo]");
        Deque<String> dq = new ArrayDeque<>();
        dq.addLast("View Home"); dq.addLast("Browse Workshops"); dq.addLast("Register:ML");
        dq.addFirst(" Dashboard");
        System.out.println(" Deque: " + dq);
        System.out.println(" UNDO (removeLast): \"" + dq.removeLast() + "\"");
        System.out.println(" After: " + dq);
        press();
    }

    // CO3: Heap
    static void dsaHeapDemo() {
        cls(); banner("CO3 MIN-HEAP PRIORITY QUEUE (Waitlist)");
        // Min-Heap implementation
        int[] pri = new int[10]; String[] names = new String[10]; int hSize = 0;

        java.util.function.BiConsumer<String,Integer> insert = (name, p) -> {
            // captured as effectively final would be complex; use PriorityQueue instead
        };

        PriorityQueue<int[]> minHeap = new PriorityQueue<>(Comparator.comparingInt(x -> x[0]));
        Map<Integer,String> pqNames = new LinkedHashMap<>();

        System.out.println(" Inserting students into waitlist:");
        Object[][] wData = {{3,"Priya Sharma"},{1,"Rohit Kumar"},{7,"Sneha Patel"},
                            {2,"Arjun Nair"},{5,"Divya Rao"},{4,"Kiran Mehta"}};
        for (Object[] d : wData) {
            int p = (int)d[0]; String n = (String)d[1];
            minHeap.offer(new int[]{p, n.hashCode()});
            pqNames.put(n.hashCode(), n);
            System.out.printf(" INSERT %-15s priority=%-3d O(log n)%n", n, p);
        }

        System.out.println("\n Heap (root = minimum priority = gets seat first)");
        System.out.println(" Seats available! Assigning in order:");
        int seat = 1;
        while (!minHeap.isEmpty() && seat <= 3) {
            int[] top = minHeap.poll();
            System.out.println(" Seat " + seat++ + " " + pqNames.get(top[1])
                               + " (priority=" + top[0] + ") O(log n)");
        }

        System.out.println("\n Max-Heap: Top-rated workshops ranking");
        PriorityQueue<double[]> maxHeap = new PriorityQueue<>((a,b) -> Double.compare(b[0],a[0]));
        String[] wNames={"Machine Learning","Data Science","Communication","Cloud AWS","Cybersecurity"};
        double[] wRatings={4.9,4.8,4.7,4.6,4.5};
        for(int i=0;i<wNames.length;i++) { maxHeap.offer(new double[]{wRatings[i],i}); }
        System.out.println(" Top 3 by rating:");
        for(int i=1;i<=3;i++) {
            double[] t = maxHeap.poll();
            System.out.printf(" %d. %-30s %.1f %n", i, wNames[(int)t[1]], t[0]);
        }
        press();
    }

    // CO4: Hash Chaining
    static void dsaHashChainingDemo() {
        cls(); banner("CO4 HASH TABLE: SEPARATE CHAINING");
        final int SIZE = 7;
        @SuppressWarnings("unchecked")
        java.util.LinkedList<String>[] table = new java.util.LinkedList[SIZE];
        for (int i=0;i<SIZE;i++) table[i] = new java.util.LinkedList<>();

        java.util.function.ToIntFunction<String> hash = key -> {
            int h=7; for(char c:key.toCharArray()) h=(h*31+c)%SIZE; return Math.abs(h);
        };

        System.out.println(" Loading all 8 workshops into hash table...");
        for (Workshop w : workshops) {
            int idx = hash.applyAsInt(w.category);
            table[idx].add(w.title.split(" ")[0]);
            System.out.printf(" INSERT %-35s bucket %d (chain=%d)%n", w.title, idx, table[idx].size());
        }

        System.out.println("\n Hash Table state:");
        for (int i=0;i<SIZE;i++) {
            System.out.printf(" [%d] ", i);
            if (table[i].isEmpty()) System.out.println("(empty)");
            else System.out.println(" " + String.join(" ", table[i]));
        }
        int n=workshops.size();
        System.out.printf("\n Load Factor = %d/%d = %.2f (< 0.75 is healthy)%n", n, SIZE, (double)n/SIZE);

        String cat = input("\n Search by category (Tech/Data/Design/Soft): ");
        int idx = hash.applyAsInt(cat);
        System.out.println(" hash(\""+cat+"\") = "+idx+" bucket "+idx+":");
        table[idx].forEach(t -> System.out.println("     " + t));
        System.out.println(" O(1) avg lookup ");
        press();
    }

    // CO4: Open Addressing
    static void dsaOpenAddrDemo() {
        cls(); banner("CO4 HASH TABLE: OPEN ADDRESSING (Linear Probe)");
        final int SIZE = 13;
        final String DEL = "##DEL##";
        String[] keys = new String[SIZE], vals = new String[SIZE];

        java.util.function.ToIntFunction<String> hash = k -> {
            int h=0; for(char c:k.toCharArray()) h=(h*31+c); return Math.abs(h)%SIZE;
        };

        String[][] sData = {{"2024CS001","Priya Sharma"},{"2024EC042","Rohit Kumar"},
            {"2024ME019","Sneha Patel"},{"2024CE007","Arjun Nair"},{"2024IT031","Divya Rao"},
            {"2024CS088","Kiran Mehta"},{"2024EC015","Anika Roy"},{"2024ME052","Vikram Singh"},
            {"2024CS033","Meera Das"},{"2024IT009","Ravi Verma"}};

        System.out.println(" Inserting 10 students via linear probing:");
        for (String[] d : sData) {
            int idx = hash.applyAsInt(d[0]), orig=idx, probes=0;
            while (keys[idx]!=null&&!keys[idx].equals(DEL)&&!keys[idx].equals(d[0])) {
                idx=(idx+1)%SIZE; probes++;
            }
            keys[idx]=d[0]; vals[idx]=d[1];
            System.out.printf(" INSERT %-12s hash=%d slot=%d probes=%d%n", d[0], hash.applyAsInt(d[0]), idx, probes);
        }

        System.out.println("\n Table state:");
        for (int i=0;i<SIZE;i++)
            System.out.printf(" [%02d] %s%n", i, keys[i]==null?"(empty)":keys[i]+" "+vals[i]);

        System.out.println("\n Load Factor = 10/"+SIZE+" = "+String.format("%.2f",10.0/SIZE));

        String roll = input("\n Search roll number: ");
        int idx = hash.applyAsInt(roll), orig2=idx, p=0; boolean found=false;
        while (keys[idx]!=null) {
            if(keys[idx].equals(roll)) { System.out.println(" FOUND: "+vals[idx]+" at slot "+idx+" ("+( p+1)+" probes) O(1) avg"); found=true; break; }
            idx=(idx+1)%SIZE; p++; if(idx==orig2) break;
        }
        if (!found) System.out.println(" NOT FOUND after "+p+" probes.");
        press();
    }

    // CO4: Collections Summary
    static void dsaCollectionsSummary() {
        cls(); banner("CO4 JAVA COLLECTIONS SUMMARY");
        System.out.println(" ");
        System.out.println("   Collection                Get/Search Insert     Used In Portal           ");
        System.out.println(" ");
        System.out.println("   HashMap                   O(1) avg   O(1) avg   Workshop ID lookup       ");
        System.out.println("   TreeMap                   O(log n)   O(log n)   Sorted category index    ");
        System.out.println("   HashSet                   O(1) avg   O(1) avg   Duplicate reg check      ");
        System.out.println("   ArrayList                 O(1)       O(n) mid   Registration list        ");
        System.out.println("   LinkedList (Queue)        O(n)       O(1)       Notification FIFO        ");
        System.out.println("   ArrayDeque                O(1) ends O(1)       Nav history + Undo/Redo ");
        System.out.println("   PriorityQueue (MinHeap)   O(log n)   O(log n)   Waitlist priority        ");
        System.out.println(" ");

        System.out.println("\n LIVE DEMO Collections used in this portal right now:");
        System.out.println(" wsIndex (HashMap)      : " + wsIndex.size() + " workshops indexed for O(1) lookup");
        System.out.println(" notifQueue (Queue)     : " + notifQueue.size() + " notifications pending (FIFO)");
        System.out.println(" navHistory (Deque)     : " + navHistory.size() + " pages in nav history");
        System.out.println(" students (ArrayList)   : " + students.size() + " students stored");
        System.out.println(" workshops (ArrayList) : " + workshops.size() + " workshops stored");

        Set<String> regCheck = new HashSet<>();
        students.forEach(s -> regCheck.add(s.email));
        System.out.println(" regCheck (HashSet)     : " + regCheck.size() + " emails for duplicate check O(1)");

        Map<String,Long> catCount = workshops.stream()
            .collect(Collectors.groupingBy(w -> w.category, TreeMap::new, Collectors.counting()));
        System.out.println(" catMap (TreeMap)       : " + catCount + " (sorted)");
        press();
    }
}